const express = require('express');

const app = express();
const PORT = process.env.PORT = 4000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Simplest WebComponent Server is running at:',PORT);
});


