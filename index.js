// const http = require('http');
const fetch = require('node-fetch');
const converter = require('./converter')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let finalFile1 = ''
let finalFile2 = ''
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/amazingVideoSite',  (req, res) => {
  res.send(`Video File 1: ${req.body.file1}, Video File 2: ${req.body.file2}. Your video will be available in your local repository as finalVid.mp4. Happy viewing!`)
  converter.createFileDoc(req.body.file1,req.body.file2)
  converter.convert()
})

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});


