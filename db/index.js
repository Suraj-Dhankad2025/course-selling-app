const mongoose = require('mongoose');


const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/CourseApp';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'CourseApp' })
    .then(()=>console.log('Database connected'))
    .catch((err)=>console.log("Unable to connect to db", err.message));

module.exports = mongoose.connection;
