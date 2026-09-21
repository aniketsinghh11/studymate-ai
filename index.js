   const express = require('express');
   const app = express();
   const PORT = 5000;

   app.get('/', (req, res) => {
     res.send('Hello from StudyMate AI backend by a Gulfum!');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });