const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/docker-node-mongo';

const connectDb = () => {
    mongoose.connect(url, () => {
        console.log('Connected to MongoDB database...');
    });
};

module.exports = connectDb;