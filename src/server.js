const express = require('express');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

const app = express()
const port = 3000
app.get('/test', (req, res) => {
  res.send('test')
}) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const run = async () => {

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      });
}

module.exports = run;
