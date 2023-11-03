const express = require('express');
const cors = require('cors');
const path = require('path');
const get_op = require('./helpers/get-op.js')


const app = express();
const port = process.env.PORT || 5500;

app.use(cors());

app.get('/', (req, res) => {
  console.log("requested homepage")
  res.sendFile(path.join(__dirname, 'index.html'));
});
//Quadratic Formula Calculator
app.get('/api/examples/quadratic-calculator', (req, res) => {
  console.log("requested examples");
  const htmlPath = path.join(__dirname, 'examples/QFCalculator/index.html');
  const jsPath = path.join(__dirname, 'examples/QFCalculator/index.js');

  // Send the HTML file
  res.sendFile(htmlPath);
});
app.get('/api/examples/quadratic-calculator/js', (req, res) => {
  const jsPath = path.join(__dirname, 'examples/QFCalculator/index.js');
  
  // Set the Content-Type header for JavaScript
  res.setHeader('Content-Type', 'application/javascript');

  // Send the JavaScript file
  res.sendFile(jsPath);
});

app.get('/api/math', (req, res) => {
  const q = req.query
  console.log("received query")
  res.send(
    {
      "result": get_op.GetOperation(q).toString(),
      "operation": q.operation,
    }
  )
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
