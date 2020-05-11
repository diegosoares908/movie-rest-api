const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/movie_rest', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

mongoose.Promise = global.Promise

mongoose.connection.on('error', (err) =>{
    console.log('Error on connect to database: ', err.message)
})

module.exports = mongoose