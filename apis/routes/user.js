import express from 'express'
import mongoose from 'mongoose'
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/userController.js';
import verifyToken from '../verifyToken.js';
const router = express.Router()

router.put('/:id',verifyToken, update); //id is userId
router.get('/find/:id', getUser); // id is userID
router.delete('/:id',verifyToken, deleteUser); //id is userId
router.put('/sub/:id',verifyToken, subscribe); //id is channelId
router.put('/unsub/:id',verifyToken, unsubscribe); //id is channelId
router.put('/like/:videoId',verifyToken, like); 
router.put('/dislike/:videoId',verifyToken, dislike); 



export default router;
