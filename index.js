require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // ADD THIS LINE
const documentRoutes = require('./routes/documentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes); // ADD THIS LINE
app.use('/api/documents', documentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB error:', err));

app.get('/', (req, res) => {
  res.send('StudyMate AI backend running');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});