const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
app.use(cors());

const router = express.Router();

const path = require('path')

router.get('/', function(req, res){
  fetch('https://discord.com/').then(response => response.text()).then(data => {
    res.send(data);
  })
});
app.use('/', router);

router.get('/playlist', function(req, res){
  fetch('https://www.youtube.com/playlist?list=PLBu3dXFyxej_q4qZuVBecE5sZ5IthE5eF').then(response => response.text()).then(data => {
    res.send(data);
  })
});
app.use('/', router);

router.get('/views/:v', function(req, res){
  const VID = req.params.v;
  fetch('https://www.youtube.com/watch?v=' + VID).then(response => response.text()).then(data => {
    res.send(data);
  })
});
app.use('/', router);

let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
  console.log("to end press Ctrl + C");
});