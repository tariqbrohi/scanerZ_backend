const express = require('express')
const router = express.Router()
const fileController = require('../controllers/file.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/upload', authMiddleware, fileController.uploadFile)
router.get('/qrcode', fileController.generateQRcode)
router.get('/get-files', fileController.getAllFiles)
router.get('/get-file-with-formate', fileController.getFileWithFormate)
router.get('/get-user-files/:id', fileController.getUserFiles)
router.get('/:id', fileController.getFile)
router.put('/data/:id', authMiddleware, fileController.updateFile)
router.delete('/:id', authMiddleware, fileController.deleteFile)

module.exports = router
