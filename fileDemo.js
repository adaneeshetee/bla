//this code is for file system code
//create folder mkdir
//append file
//read file
//rename file

// const { error } = require('console');
// const fs=require('fs')
// const path=require('path')
// //create folder called test in the fileDemo folder
//  fs.mkdir(path.join(__dirname,'/exam'),{},error=>{
//     if(error) throw error;
//     console.log('folder created..');
// });
//file called hello.txt is created in test foder and condtaain some data
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'test is created in mkdir and the hollo.txt file with the test contain me ',error=>{
//     if(error) throw error;
//     console.log('file is written..');
//     //file append to the created folder

// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'this file is appendedto the prives one',error=>{
//     if(error) throw error;
//     console.log('file is appended..');
// });
// });

//read file from test name hello.txt

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(error,data)=>{
//     if(error) throw error;
//     console.log(data);
// });
//rename file hello.txt to hellworld.txt
// fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),(error,data)=>{
//     if(error) throw error;
//     console.log('file rename');
// });

