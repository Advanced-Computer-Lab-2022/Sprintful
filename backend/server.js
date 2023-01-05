const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require("cors")
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const stripe = require("stripe")(process.env.STRIPE_S_KEY)
connectDB()
const {requireAuth} = require('./middleware/authMiddleware')
 

const app = express();

// added this line to overcome a connction error with axios.get()
app.use(cors()) // Use this after the variable declaration

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use(express.json()) // This is a middleware function that allows us to accept JSON data in the body
app.use(express.urlencoded({ extended: true })) // This is a middleware function that allows us to accept form data
// app.use(express.params) // This is a middleware function that allows us to accept params
app.use(cookieParser());
app.use(bodyParser.json())
app.use('/api/admin', requireAuth,require('./routes/adminRoutes'))
app.use('/api/courses',requireAuth, require('./routes/courseRoutes'))
app.use('/api/instructor', requireAuth,require('./routes/instructorRoutes'))
app.use('/api/guest', require('./routes/guestRoutes'))
app.use('/api/corporateTrainee', requireAuth,require('./routes/corporateTraineeRoutes'))
app.use('/api/individualTrainee',requireAuth, require('./routes/individualTraineeRoutes'))
app.use('/api/subtitles', requireAuth,require('./routes/subtitleRoutes'))
app.use('/api/tasks', requireAuth,require('./routes/taskRoutes'))
app.use('/api/answers', requireAuth, require('./routes/answerRoutes'))
app.use('/api/questions',requireAuth, require('./routes/questionRoutes'))
app.use('/api/report', requireAuth,require('./routes/reportRoutes'))
app.use('/api/requestAccess',requireAuth, require('./routes/requestAccessRoutes'))
app.use('/api/refund', requireAuth,require('./routes/refundRequestRoutes'))
app.post("/payment", async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Online learning platform",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(port, () => { 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
}) 