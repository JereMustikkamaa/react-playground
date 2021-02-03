const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.static('build'))

app.get('/', (req, res) => {
  res.send()
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})