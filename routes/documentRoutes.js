const express = require('express');
const multer = require('multer');
const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const Document = require('../models/Document');
const chunkText = require('../utils/chunkText');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

router.post('/upload', upload.single('pdf'), async (req, res) => {
  let parser;

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'PDF file is required' });
    }

    const dataBuffer = fs.readFileSync(req.file.path);

    parser = new PDFParse({ data: dataBuffer });
    const pdfData = await parser.getText();

    const chunks = chunkText(pdfData.text);
    const newDocument = new Document({
      user: req.body.userId,
      fileName: req.file.originalname,
      extractedText: pdfData.text,
      chunks: chunks,
    });

    await newDocument.save();

    res.status(201).json({
    message: 'File uploaded and text extracted successfully',documentId: newDocument._id,
    chunkCount: chunks.length,
    textPreview: pdfData.text.substring(0, 200),
    });
  } catch (err) {
    res.status(500).json({
      message: 'Upload failed',
      error: err.message,
    });
  } finally {
    if (parser) {
      await parser.destroy();
    }
  }
});

// GET a document's chunks (for AI module to use)
router.get('/:id', async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json({
      documentId: document._id,
      fileName: document.fileName,
      chunks: document.chunks,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching document', error: err.message });
  }
});

module.exports = router;