// Imports
require('dotenv').config()
const express = require('express')
const routes = require('./routes/todo.route') 
const connectDb = require('./database/connect-database')
const cors = require('cors')

// Use
const app = express()
connectDb()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.use(routes)
app.listen(PORT, () => { console.log(`Server started on port: localhost:${PORT}`) })
