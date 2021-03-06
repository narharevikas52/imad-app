var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articals = {
     'artical-one': { 
             title:'vikas narhare | painting two',
             heading:'Painting two',
             date: 'Aug 26 2017',
             content:`
                <p>
                   Hello World! do you like my background painting. This is my painting, hope you like it.
                </p>`
          },
     'artical-two': { 
             title:'vikas narhare | painting two',
             heading:'Painting two',
             date: 'Aug 26 2017',
             content:`
                <p>
                   Hello World! do you like my background painting. This is my painting, hope you like it.
                </p>`
          },
     'artical-three': {
             title:'vikas narhare | painting three',
             heading:'Painting three',
             date: 'Aug 26 2017',
             content:`
                <p>
                   Hello World! do you like my background painting. This is my painting, hope you like it.
                </p>`
          }
};

function createTemplate (data) {
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;

   var htmlTemplate =`
   <html>
   <head>
    <title>
        ${title}
    </title> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
   <head>
    <body>
       <div class="container">
       <div>
              <a href="/">home</a>
       </div>  
       <hr/>
       <h1>
            ${heading} 
       </h1>
       <div>
            ${date} 
       </div>
       <div>
            ${content}   
      </div>
      </div>
    </body>   
   </html>
   `;
   return htmlTemplate;
   }


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName', function (req, res) {
  // articalName == artical-one
  // artical[articalName] == {} content object for artical one
  var articalName = req.params.articalName;
   res.send(createTemplate(artical[articalName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
