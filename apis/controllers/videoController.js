import { createError } from "../error.js";
import User from "../models/User.js";
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
        const videos = await Video.find().sort({views : -1})
        // console.log(videos); 
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}


export const random = async (req,res,next) => {
    try {
        const videos = await Video.aggregate([{$sample : {size : 40}}])
        // console.log(videos); 
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}


export const subVideos = async (req,res,next) => {
    try {
        const user =await User.findById(req.user.userId);
        console.log(user);

        const videos = await Video.find({
            userId : { $in : user.subscribedUsers}
        })
        console.log(videos);
        res.status(200).json(videos.sort((a,b) => b.createdAt - a.createdAt))
    } catch (error) {
        next(error)
    }
}

export const getByTags = async (req,res,next) => {
    try {
        const tags = req.query.tags.split(',');
        // console.log(tags);
        const videos = await Video.find({
            tags : {$in : tags}
        }).limit(20)
        // console.log(videos); 
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const search = async (req,res,next) => {
    try {
        const query = req.query.q;
        console.log(query);
        const videos = await Video.find({
            title : {$regex : query, $options : "i"}
        }).limit(40)
        // console.log(videos); 
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}