// using http server
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// using express server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const hostname = 'localhost';
const port = 4200;

// app.get('/',function(req,res){
// res.send('hello world');
// //console.log(res.status);
// });

// app.get('/about', (req,res) =>{
// 	res.send('<h1>About</h1>');
// });
 
// app.get('/', (req,res) => {
// 	// let user = req.params.name;
// 	let user = "HELLO RAJAT";
// 	res.send('<h1>'+user+'</h1>');
// });

// Set Static path



// app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
 let users = [
{
 	first_name: "Darsh",
 	last_name:"T",
 	age: 21,
 	gemder:"Female"
 },
{
 	first_name: "D",
 	last_name:"Intelligent",
 	age: 22,
 	gemder:"Female"
 },
{
 	first_name: "Alok",
 	last_name:"Kumar",
 	age: 24,
 	gemder:"male"
 }];
 res.json(users);
 res.send("<h1>"+res+"</h1>")
});

// app.get('/', (req,res) =>{
// 	res.download(path.join(__dirname,'/download/cert.pdf'));
// });

// app.get('/about', (req,res) =>{
// 	res.redirect('about.html');
// });

// app.post('/subscribe', (req,res) => {
// 	 let name = req.body.name;
// 	 let email = req.body.email;

// 	 console.log(name + ' has subscribe with ' + email);
// });

app.listen(port,hostname,function(){
	//console.log(hostname);
	//console.log(port);
	console.log(`Server running at http://${hostname}:${port}/`);
});
