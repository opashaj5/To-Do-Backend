require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const taskController = require('./controllers/task.js')

app.use(cors())
app.use(express.json())
app.use('/tasks', taskController)
// app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Running on: ${PORT}`)
})