
var koa = require('koa');

var app = module.exports = koa();

app.use(function* () {
    if(this.request.get('Content-Type') === 'text/plain') {
        this.body = 'ok';
    } else {
        this.response.set('Content-Type', 'application/json');
        this.body = {
            message: 'hi!'
        };
    }

})
