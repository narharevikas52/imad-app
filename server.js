var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articalone= {
    title:'vkas narhare | painting one',
    heading:'Painting one',
    date: 'Aug 26 2017',
    content:`
            <p>
                Hello World! do you like my background painting. This is my painting, hope you like it.
            </p> '
}

function createTemplate (data) {
var htmlTempalet = `
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `
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
 ' ;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Artical-one', function (req, res) {
   res.send(createTemplate(articalone));
});

app.get('/Artical-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/Artical-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
