
//---------------------------------------  created simple server  --------------------------------------

//const http = require('http');
import http from "http";  // hya hamne es esliye use kiya h kyuki package.json me "type" : "module" liya h ! module ka use karne ke bad require nhi chalta h

// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.write('<h1>Hello, nodejs !</h1>');
//     }else if('/about'){
//         res.write('<h1> u visited about page !</h1>');
//     }
//     res.end();
// });
// server.listen(3000);
// console.log("the http server running on 3000 port");

//---------------------------- created server with setHeader() method -----------------------------------

// const port = 3000;
// const hostname = "localhost";

// const server = http.createServer((req,res)=>{
    
    //     // res.statusCode = 200;
    //     // res.setHeader('Content-Type','text/plain');
    //     // res.end('Node server crearted by ashutosh mishra');
    
    //     res.statusCode = 500;
    //     res.setHeader('Content-Type','application/json');
    //     res.end(JSON.stringify({error:"server error !"}));
    // });
    
    // server.listen(port,()=>{
        // console.log(`server running at ${hostname}}:${port}`);
        // });
        
//-------------------------- server to server call using http.request() ---------------------------------

// const options = {
//     hostname : 'fakestoreapi.com',
//     path : '/products/1',
//     method : 'GET'
// }

// const apiReg = http.request(options,(apiReg)=>{
//     apiReg.on('data',(data)=>{
//         console.log(data.toString());
//     })
// });

// apiReg.on('error',(e)=>{
//     console.log(e);
// });

// apiReg.end();

//----------------------------- how to handle diffrent urls in nodejs -----------------------------------

const port = 3001;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1> Welcome To Nodejs. </h1>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('This is about page !');
    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({
            data: "this is contact page",
            contact : 'you can contact with this site'
        }));
    }
    else if(req.url == "/product"){
        const options = {
            hostname : 'fakestoreapi.com',
            path : '/products/1',
            method : 'GET'
        }
        
        const apiReq = http.request(options,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.end(data.toString());
            })
        });
        apiReq.on('the error is : ',(e)=>{
            res.write(e);
        });

        apiReq.end();
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end('Page Not Fount !');
    }
});

server.listen(port,()=>{
    console.log(`The Server Running On ${hostname}:${port}`);
});

