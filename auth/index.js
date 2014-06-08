var derby = require('derby'),
    path = require('path');

var app = module.exports = derby.createApp('auth', __filename);
app.serverUse(module, 'derby-stylus');

if (!derby.util.isProduction) {
  global.app = app;
}

app.loadViews(path.join(__dirname, '../views'));
app.loadStyles(path.join(__dirname, '../styles'));

app.use(require('derby-starter/node_modules/derby-login/components'));

app.get('/', function(page) {
  page.render();
});