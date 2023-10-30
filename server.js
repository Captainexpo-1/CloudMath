const express = require('express');
const path = require('path');
const get_op = require('./helpers/get-op.js')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/math', (req, res) => {
  const q = req.query
  console.log(q)
  res.send(
    {
      "result": get_op.GetOperation(q).toString()
    }
  )
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});