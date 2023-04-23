
const path=require('path')
const fs=require('fs')

// if(req.url==='/')
//    fs.readFile(path.join(__dirname,'home.html'),(error,content)=>{
//     if(error) throw error
//     res.writeHead(200,{'content':'text/html'});
//   res.end(content);
//    });
   
//    if(req.url==='/abot')
//    fs.readFile(path.join(__dirname,'abot.html'),(error,content)=>{
//     if(error) throw error
//     res.writeHead(200,{'content':'text/html'});
//   res.end(content);
//    });

//build file path
const http = require('http');

const server = http.createServer(function(req, res) {
  if (req.url === '/') {
    res.write('start browser');
  } else if (req.url === '/about') {
    res.write('this is the school registration system');
  } else {
    res.write('<h1>error occurred</h1>');
    res.write('<p>You navigated the wrong way</p>');
    res.write('<a href="/">Back to Home</a>');
  }
  res.end();
});

server.listen(8000, function() {
  console.log('Server running at port 5000');
});
