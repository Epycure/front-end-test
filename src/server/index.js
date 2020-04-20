const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const todos = require('./routes/todos');

// configure app
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// register API routes
app.use('/api/todos', todos);

// serve web app at root
const build = path.resolve(process.cwd(), './build');
app.use(express.static(build));
app.use('*', (req, res) => {
  res.sendFile(path.join(build, 'index.html'));
});

// run server
app.listen(app.get('port'), () => {
  console.log(`App running on port ${app.get('port')}.`);
});