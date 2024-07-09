import { createError } from "../error.js";
import Comment from "../models/Comment.js";

export const addComment = async (req,res) => {
    try {
        // console.log(req.body);
        const newComment = new Comment({...req.body, userId : req.user.userId});
        await newComment.save();
        res.status(200).json(newComment)
    } catch (error) {
    next(error)   
    }
}


export const deleteComment = async (req,res,next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if(req.user.userId != comment.userId) return next(createError(401, "Unauthorized | Cannot delete comment"))
        // console.log(req.params.id);
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment deleted")
    } catch (error) {
    next(error)   
    }
}

export const getComments = async (req,res) => {
    try {
        // console.log(req.params.videoId);
        const comments = await Comment.find({
           videoId : req.params.videoId 
        })
        // console.log(comments);
        res.status(200).json(comments)
    } catch (error) {
    next(error)   
    }
}