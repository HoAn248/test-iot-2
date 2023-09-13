var express = require('express')
var router = express.Router()
var UploadController = require('../controllers/upload.controller')
router.get('/', UploadController.getUpload)
router.post('/', UploadController.createUpload)

module.exports = router