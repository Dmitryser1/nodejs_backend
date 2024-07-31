const express = require('express');
const app = express();
const routes = require('./router/task_routes')
const port = 3000;
require('./db/db')

app.use(express.json())

app.use('/api/tasks', routes);

app.listen(port, console.log(`Server listens to port ${port}`))