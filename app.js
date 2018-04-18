const express = require('express');
const app = express();

app.get('/mytrip', (req, res) => {
  res.send({
    "My Trip": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
