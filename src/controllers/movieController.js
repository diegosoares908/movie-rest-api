const Movie = require('../models/Movie')
const Cast = require('../models/Cast')

exports.list = async (req, res) => {
    try {
        const movies = await Movie.find()

        res.json(movies)
    } catch (error) {
        return res.status(400).send({'error': 'Error listing movies'})
    }
}

exports.get = async (req, res) => {
    try {
        const movieId = req.params.id

        const movie = await Movie.findById(movieId)

        return res.json(movie)
    } catch (error) {
        return res.status(400).send({'error': 'Error finding movie'})
    }
}

exports.create = async (req, res) => {
    try {
        const {title, year, duration, gender, movieCast} = req.body

        const movie = await Movie.create({title, year, duration, gender})

        await Promise.all(movieCast.map(async cast => {
            
            const movieCast = new Cast({...cast})

            await movieCast.save()

            movie.movieCast.push(movieCast)
            
        }))

        await movie.save()

        return res.json({movie})
    } catch (error) {
        return res.status(400).send({'error':'Error creating new movie'})
    }
}

exports.update = async (req, res) => {
    try {
        const movieId = req.params.id
        const {title, year, duration, gender} = req.body

        const movie = await Movie.findByIdAndUpdate(movieId, {
            title,
            year,
            duration,
            gender
        })

        return res.json({movie})
    } catch (error) {
        return res.status(400).send({'error':'Error updating movie'})
    }
}

exports.delete = async (req, res) => {
    try {
        const movieId = req.params.id

        const movie = await Movie.findByIdAndDelete(movieId)

        return res.json({'Ok': 'Deleted successfully'})
    } catch (error) {
        return res.status(400).send({'error':'Error deleting movie'})
    }
}