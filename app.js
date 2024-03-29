var express = require('express');
const path = require('path');
app = express();
app.use(express.static(path.join(__dirname, 'views')));


// app.get('/', function (req, res) {
//   res.send('Hello World!\n');
// });

app.get('/', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath);
});

app.get('/mb', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

