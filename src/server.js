const express = require('express');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


const app = express()
const port = 3000
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
  console.log('test get');
});


app.post('/test',urlencodedParser, (req,res) => {

  console.log(req.body);
  //res.render('test', {qs: req.query});
}) ;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('test home');
})

const run = async () => {
   await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

  

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      });
}

module.exports = run;


