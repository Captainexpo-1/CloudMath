const express = require('express');
const path = require('path');
const get_op = require('./helpers/get-op.js')

const app = express();
const port = 5500;

app.get('/', (req, res) => {
  console.log("requested for homepage")
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/math', (req, res) => {
  const q = req.query
  console.log("recieved query")
  res.send(
    {
      "result": get_op.GetOperation(q).toString()
    }
  )
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
