import { createError } from "../error.js";
import Video from "../models/Video.js";

export const addVideo = async (req,res,next) => {
    try {
        // console.log(req.body);
        
        const newVideo = new Video({
            ...req.body,
            userId : req.user.userId
        })
        await newVideo.save()
        // console.log(newVideo);
        res.status(201).json("added new video")
    } catch (error) {
        next(error)
    }
}

export const updateVideo =async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))

        if(req.user.userId != video.userId) return next(createError(401, "Not authorized | cannot update video"))
        
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
            $set : req.body
        }, {new:true})

        // console.log(updatedVideo);
        res.status(200).json(updatedVideo)
    } catch (error) {
        next(error)
    }
}

export const getVideo =async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))

        res.status(200).json(video)
    } catch (error) {
        next(error)
    }
}

export const deleteVideo = async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))

        if(req.user.userId != video.userId) return next(createError(401, "Not authorized | cannot delete video"))
        
        await Video.findByIdAndDelete(req.params.id)

        res.status(200).json("video deleted")
    } catch (error) {
        next(error)
    }
}

export const addView = async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))
        
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
            $inc : {views : 1}
        }, {new:true})

        console.log(updatedVideo);

        res.status(200).json("new view added")
    } catch (error) {
        next(error)
    }
}


export const trend = async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))

        if(req.user.userId != video.userId) return next(createError(401, "Not authorized | cannot delete video"))
        
        await Video.findByIdAndDelete(req.params.id)

        res.status(200).json("video deleted")
    } catch (error) {
        next(error)
    }
}


export const random = async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))

        if(req.user.userId != video.userId) return next(createError(401, "Not authorized | cannot delete video"))
        
        await Video.findByIdAndDelete(req.params.id)

        res.status(200).json("video deleted")
    } catch (error) {
        next(error)
    }
}


export const subVideos = async (req,res,next) => {
    try {
        // console.log(req.params);

        const video = await Video.findById(req.params.id)
        // console.log(video);
        if(!video) return next(createError(404,"No such video exists"))

        if(req.user.userId != video.userId) return next(createError(401, "Not authorized | cannot delete video"))
        
        await Video.findByIdAndDelete(req.params.id)

        res.status(200).json("video deleted")
    } catch (error) {
        next(error)
    }
}