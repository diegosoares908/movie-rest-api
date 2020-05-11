const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController')

router.get('/movies/list', movieController.list)
router.get('/movies/:id', movieController.get)
router.post('/movies', movieController.create)
router.put('/movies/:id', movieController.update)
router.delete('/movies/:id', movieController.delete)

module.exports = router