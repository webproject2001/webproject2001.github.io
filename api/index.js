const http=require("http");
const  fs = require("fs");
const { dirname } = require("path");

const server=http.createServer((req,res)=>{
//    const data= fs.readFileSync(`${--dirname}/API/productapi.json`,"utf-8");
   const data= fs.readFileSync("./productapi.json","utf-8");

//    const objData=JSON.parse(data);
    if(req.url=="/productapi"){
        res.writeHead(200,{"context-type":"application/json"});
        // res.end(objData[1].title);
        res.end(data);

    }
    else{
        res.writeHead(404,{"context-type":"text/html"});
        res.end("<h1> 404 error .page not found</h1>");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000");
});