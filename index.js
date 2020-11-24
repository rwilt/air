// const http = require('http');
const converter = require('./converter')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//here we spin up our server and wait for our data to come in from the user. when the data is inputted, we tell the user 
//that their video is on the way. I learned through StackOverflow that this process is made easier with Node by using Express and the middleware bodyParser,
//and so that is what is used here. 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/amazingVideoSite',  (req, res) => {
  res.send(`Video File 1: ${req.body.file1}, Video File 2: ${req.body.file2}, Video File3: ${req.body.file3}. Your video will be available in your local repository as finalVid.mp4. Happy viewing!`)
  converter.createFileDoc(req.body.file1,req.body.file2, req.body.file3)
  converter.convert()
})

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});


