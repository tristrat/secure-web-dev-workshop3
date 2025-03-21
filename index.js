const express = require('express')
const locationController = require('./locations/locations.controller')
const userController = require('./user/users.controller')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()
require('./strategy/strategy.local');
require('./strategy/strategy.jwt');
require('./middleware/middleware.strategy');
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(locationController)
app.use(userController)
app.listen(port, async () => {
	await mongoose.connect(process.env.MONGO_URI);
	console.log("Connect");
	console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
})