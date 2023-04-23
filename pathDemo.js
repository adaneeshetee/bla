const path=require('path')
//base file name
console.log(path.basename(__filename))
//return the whole pth +name
console.log(path.__filename);
//directory name
console.log(path.dirname(__filename))
//file extension
console.log(path.extname(__filename))
//create path object\
console.log(path.parse(__filename))
// path consider the path to 

console.log(path.join(__dirname,'test','final','hell.html'))











