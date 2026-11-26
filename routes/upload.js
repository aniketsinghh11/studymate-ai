const axios = require('axios');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const pdf = require('pdf-parse');
const chunkText = require('../utils/chunkText'); // adjust path if chunkText.js is somewhere else
const Document = require('../models/Document'); // adjust path/filename if your model file is named differently
const authMiddleware = require('../middleware/authMiddleware');

// Configure where uploaded files get stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // make sure this folder exists in your backend root
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST /api/upload
router.post('/', authMiddleware, upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Read the uploaded PDF file
    const dataBuffer = fs.readFileSync(req.file.path);

    // Extract text from PDF
    const pdfData = await pdf(dataBuffer);
    const extractedText = pdfData.text;

    // Split into chunks
    const chunks = chunkText(extractedText);

    // Save to MongoDB
    const newDocument = new Document({
      user: req.user._id, // make sure your auth middleware sets req.user
      fileName: req.file.filename,
      extractedText: extractedText,
      chunks: chunks
    });

    await newDocument.save();

        // Send chunks to AI service for embedding
    try {
      const chunksForEmbedding = chunks.map((chunkText, index) => ({
        text: chunkText,
        page: 1,
        chunk: index,
        document: req.file.filename
      }));

      await axios.post('http://127.0.0.1:8000/embed', {
        chunks: chunksForEmbedding
      });
    } catch (embedErr) {
      console.error('Embedding failed:', embedErr.message);
      // Don't fail the whole upload if embedding fails
    }

    res.status(200).json({
      message: 'File uploaded, processed, and saved successfully',
      documentId: newDocument._id,
      chunkCount: chunks.length
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
});

module.exports = router;