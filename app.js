var express = require('express');

var app = express();

var port = 5000;
var bookRouter = express.Router();

app.set("views", "./src/views/");

app.use(express.static('public'));
app.set('view engine', 'ejs');

bookRouter.route("/")
    .get(function (req, res) {
        res.render('books', { nav: [{ Link: '/Books', Text: 'Books' }, { Link: '/Authors', Text: 'Authors' }] });
    });

bookRouter.route("/single")
    .get(function (req, res) {
        res.send("Hello Single Books");
    });

app.use("/Books", bookRouter);

app.get('/', function (req, res) {
    res.render('index', { nav: [{ Link: '/Books', Text: 'Books' }, { Link: '/Authors', Text: 'Authors' }] })
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});