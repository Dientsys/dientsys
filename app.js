const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');

const app = express();

connectDb();
const port = process.env.NODE_LOCAL_PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', require('./routes/user'));

app.listen(port, () => {
    console.log('Server is running successfully on port ${port}');
});

