const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileName: { type: String, required: true },
  extractedText: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);