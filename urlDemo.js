//about the url
const url=require('url')
//instantaite new ur ulr
const myurl=new URL('http:/mywebsite.com/ada.html?id=100&status=active');
//serialize the url below both are simmilar
console.log(myurl.href)
console.log(myurl.toString())
//host (root domain) name
console.log(myurl.hostname)
//path name
console.log(myurl.pathname)
//add parametre
myurl.searchParams.append('abc','654')
//seriyalize query
console.log(myurl.searchParams);
//loop through  the elements
myurl.searchParams.forEach((value,name)=>console.log(name+':'+value));
console.log(myurl.href)