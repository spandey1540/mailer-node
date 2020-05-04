
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var morgan = require('morgan')

var indexRouter = require('./routes');


app.use(bodyparser.urlencoded({
    limit: '50mb',
    extended:true
}));

app.use(bodyparser.json());

app.use('/',morgan('tiny'), indexRouter);

mongoose.connect("mongodb://localhost:27017/mailer", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    }, () => {
    });

let port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
    console.log("app is listening on the port no ", port);
});

module.exports = app;