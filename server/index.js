const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

///////////// This code should always be at the end
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
