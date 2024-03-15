const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});