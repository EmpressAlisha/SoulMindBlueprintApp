const express = require('express');
const app = express();
const blueprint = require('./blueprint.json');

app.get('/api/blueprint', (req, res) => {
  res.json(blueprint);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
