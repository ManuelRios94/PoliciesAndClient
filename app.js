let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

// Routes Declarations

let clientRoutes = require('./routes/Client/clientRoute');
let policiesRoutes = require('./routes/Policies/policiesRoute');


let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Declaration of the public folder */
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes

app.use('/client', clientRoutes);
app.use('/policies', policiesRoutes);

module.exports = app;

