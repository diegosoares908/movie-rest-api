const mongoose = require('../database/config')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    gender:{
        type: String
    }
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie