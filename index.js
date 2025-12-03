const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello from Coolify minimal test!');
});

app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
