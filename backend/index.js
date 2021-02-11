/* THESE IMPORTS MUST BE DONE FIRST TO INITIALIZE SCHEMAS */
require('./models/user')
require('./models/blog')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const { unknownEndpoint, errorHandler, tokenExtractor } = require('./utils/middleware')
const { info } = require('./utils/logger')

/* ROUTE IMPORTS */
const blogRouter = require('./controllers/blogRouter')
const authRoutes = require('./controllers/authRoutes')

/* DB SETUP */
info('connecting to db')
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true
})
mongoose.connection.on('connected', () => {
  info('Connected to mongo db')
})
mongoose.connection.on('error', (err) => {
  error('error connecting to mongo db', err)
})

const staticServe = express.static('build')

/* MIDDLEWARE */
app.use(staticServe)
app.use(cors())
app.use(express.json())

/* ROUTES */
app.use(authRoutes)
app.use('/api/blogs', blogRouter)

/* END MIDDLEWARE */
app.use('*', staticServe) // FRONTEND
app.use(errorHandler)

const port = config.PORT || 3001
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})