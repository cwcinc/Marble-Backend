const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
app.use(cors());

const router = express.Router();

const path = require('path')

router.get('/', function(req, res){
  res.send("oopsies");
});
app.use('/', router);

router.post('/sendtrack', function(req, res){
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const headers = req.headers;
      console.log('Received POST request with body:', body);
      console.log("Headers: ", headers);
      fetch('https://www.marblerun.at/tracks', {
        method: 'POST',
        headers: headers,
        body: body
      })
      .then(data => {
        res.send(data);
      })
    })};
});
app.use('/', router);

let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
  console.log("to end press Ctrl + C");
});