const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const DB_URL = "mongodb://localhost:27017/Octa";

mongoose.connect(DB_URL);
const conn = mongoose.connection;

conn.once('open', () => {
    console.log("Successfully database connected");

})

// app.use(cors())
// app.use(express.json())

app.listen(3001, () => {
    console.log("Server is running")
})

