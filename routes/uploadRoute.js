const express = require('express')
const uploadRouter = express.Router()

const upload = require('../config/multer.config')
const uploadController = require('../controller/uploadController')

uploadRouter.post('/upload-file', upload.array('file', 4), uploadController.upload_multiple_file)
uploadRouter.post('/delete-file/:key', uploadController.delete_file)

module.exports = uploadRouter


