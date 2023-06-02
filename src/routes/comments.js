const express = require('express')
const router = express.Router()

const CommentController = require('../controllers/commentController')

router.get('/:id', CommentController.listById)
router.post('/create', CommentController.create)

module.exports = router