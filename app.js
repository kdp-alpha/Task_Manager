const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notfound = require('./middleware/middleware')
require('dotenv').config();

app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(notfound)

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();





//app.get('/app/v1/tasks') - get all the tasks
//app.post('/app/v1/tasks') - create new tasks
//app.get('/api/v1/tasks/:id')-get single tasks
//app.patch('/api/v1/tasks/:id') - updtae tasks