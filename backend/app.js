//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// Load Config
const config = require('./configs/expense.config.json');

// Set up mongoose connection
const mongoose = require('mongoose');
let db_url = config.db_url;
console.log(db_url);
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const expense = require('./routes/expense.route'); // Imports routes for the expenses

app.use('/expenses', expense);
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
