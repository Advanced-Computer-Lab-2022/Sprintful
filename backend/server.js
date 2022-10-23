const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


const app = express();

app.use('/api/admin', require('./routes/adminRoutes'))


app.listen(port, () => { 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
})