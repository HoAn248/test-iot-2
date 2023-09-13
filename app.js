const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');

MONGODB_URL = 'mongodb+srv://Users:hoducan123@cluster0.thhnc7l.mongodb.net/database?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Thêm code xử lý khi kết nối thành công ở đây
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        // Thêm code xử lý khi kết nối thất bại ở đây
    });

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRoute = require('./api/routes/upload.routes');
app.use("/", locationRoute);

app.listen(3000)