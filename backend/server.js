const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const bodyParser = require("body-parser");

connectDB()

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json()) // This is a middleware function that allows us to accept JSON data in the body
app.use(express.urlencoded({ extended: false })) // This is a middleware function that allows us to accept form data
app.use(errorHandler)

app.use('/api/admin', require('./routes/adminRoutes'))


app.listen(port, () => { 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
}) 