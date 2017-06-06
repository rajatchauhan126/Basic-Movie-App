const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const fs = require('fs');
const db = [];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, 'client')));

//form start of post method

app.post('/subscribe',(req,res) =>
{

let name = req.body.name;
let email = req.body.email;

let enterdata =  db + db.push(req.body.email);
let enterdata1 =  db + db.push(req.body.name);


	fs.writeFile('db.json', JSON.stringify(db), (err) => {

		if (err) throw err;
	});

      res.send('The name has been saved');
      console.log(db);
      read();
    });


//end of post method

//start of read method

function read(){

app.get('/',(req, res) => {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      // res.send("the data is "+fs);
      res.send(JSON.parse(data));
    });
  });

}
//end of read method

// app.get('/',(req, res) =>
// {
// res.send("hello world");
	
// });

// res.send("<p>"+name +"</p>")

// console.log(name+  'has subscribe with');
// });


// router.route('/bears')
//   .post((req, res) => {
    
//   })

//form data end

//simple hello

// app.get('/',(req, res) =>
// {
// // res.send("hello world");
	
// });

//use of router

// router.get((req, res) => {
//   res.send("hello world using routing");
  
// });

//end router

// app.get('/',(req, res) =>
// {
// res.send("hello world");
	
// });


// app.use('/api', router);

app.listen(3000, function() {
  console.log('Example app listening on port ');
});