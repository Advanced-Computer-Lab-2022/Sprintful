const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require("cors")
const connectDB = require('./config/db');

connectDB()
 
const app = express();
app.use(cors())

// added this line to overcome a connction error with axios.get()
app.use(cors()) // Use this after the variable declaration

app.use(express.json()) // This is a middleware function that allows us to accept JSON data in the body
app.use(express.urlencoded({ extended: false })) // This is a middleware function that allows us to accept form data
// app.use(express.params) // This is a middleware function that allows us to accept params

app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/instructor', require('./routes/instructorRoutes'))
app.use('/api/guest', require('./routes/guestRoutes'))
app.use('/api/corporateTrainee', require('./routes/corporateTraineeRoutes'))
app.use('/api/individualTrainee', require('./routes/individualTraineeRoutes'))
app.use('/api/subtitles', require('./routes/subtitleRoutes'))
app.use('/api/tasks', require('./routes/taskRoutes'))
app.use('/api/answers', require('./routes/answerRoutes'))
app.use('/api/questions', require('./routes/questionRoutes'))




app.listen(port, () => { 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
}) 