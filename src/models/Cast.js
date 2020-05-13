const mongoose = require('../database/config')

const CastSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    birth: {
        type: Number
    },
    role: {
        type: String,
        require: true
    }
})

const Cast = mongoose.model('Cast', CastSchema)

module.exports = Cast