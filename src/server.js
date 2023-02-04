require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const connectToMongoDB = require('./config/connectDB.config')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_, res) => {
	res.send('Welcome to the API')
})

app.use('/api/v1', routes)

const startServer = async () => {
	try {
		const PORT = process.env.PORT
		await connectToMongoDB()
		app.listen(PORT, () => {
			console.log(`server started on port http://localhost:${PORT}`)
		})
	} catch (err) {
		console.error(err.message)
		process.exit(1)
	}
}

startServer()