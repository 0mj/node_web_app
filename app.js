const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path'); // this is part of node and dosn't need 'npm install' 
const passport = require('passport');
const cookie_parser = require('cookie-parser');
const express_session = require('express-session');

const PORT = process.env.PORT || 3000;
const app = express();
const sessions_Router = require('./src/routers/sessions_router');
const admin_router = require('./src/routers/admin_router');
const auth_router = require('./src/routers/auth_router');

// these MUST be in order..
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());  // used to bodyparse.json
app.use(express.urlencoded({extended:false}));
app.use(cookie_parser());
app.use(express_session( { secret: 'globomantics' } ));

require('./src/config/passport.js')(app); // passport is returning a function


app.set('views','./src/views');
app.set('view engine', 'ejs');


app.use('/sessions', sessions_Router);
app.use('/admin', admin_router);
app.use('/auth', auth_router);


app.get('/', (req, res) => {
    res.render('index', { title: 'Globomantics', data: ['a', 'b', 'c'] });
});

// POST SANITY CHECK SANITY CHECK. Functions properly when commenting out above.
// app.post('/', function (req, res) {
//     res.send('Got a POST request')
// })


app.listen(PORT, ()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});