const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 7000

const cors = require("cors")

connectDB()

const app = express();
app.use(errorHandler)

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



app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
}) 