import express from 'express'
import mongoose from 'mongoose'
import verifyToken from '../verifyToken.js'
import { addVideo, addView, deleteVideo, getVideo, random, subVideos, trend, updateVideo } from '../controllers/videoController.js'
const router = express.Router()

router.post('/',verifyToken, addVideo)
router.get('/find/:id', getVideo )
router.delete('/:id',verifyToken, deleteVideo)
router.put('/:id',verifyToken,updateVideo)
router.put('/view/:id',addView)
router.get('/trend',trend )
router.get('/random',random )
router.get('/sub', verifyToken,subVideos)

export default router;
