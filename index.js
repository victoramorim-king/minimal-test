const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello from Coolify minimal test!! Victor Amorim');
});

app.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));
