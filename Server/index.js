//* Server File For Shopping Site
const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser')
const fu = require('express-fileupload')
const mongoose = require('mongoose');
const app = express();
const pr = require('./routes/productR')
const cr = require('./routes/Category');
const path = require('path')
const publicFolderPath = path.join(__dirname, 'public');
require('dotenv').config();

// Static Files Setup
app.use(express.static(publicFolderPath));
// Use FileUpload
app.use(fu());
// using CORS
app.use(cors());

// DB Connection
mongoose.connect(process.env.MONGO_URL); // from MongoAtlas
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// parse forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using other Router
app.use('/product', pr);  // URL: localhost:3000/product/sel
app.use('/category', cr);

// Home Route
app.get('/', (req, res) => {
    res.send("Server Started");
});

app.listen(3000);
console.log("Listening On Port 3000");