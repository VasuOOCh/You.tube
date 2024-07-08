import { createError } from "../error.js";
import User from "../models/User.js";

export const update =async (req, res, next) => {
    try {
        // console.log(req.params);
        if (req.params.id != req.user.userId) return next(createError(401, "Not authorized | You cannot update user"))
        const updatedUser =await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        // console.log(updatedUser);
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser =async (req, res, next) => {
    try {
        // console.log(req.params);
        console.log(req.user);
        if (req.params.id != req.user.userId) return next(createError(401, "Not authorized | You cannot delete user"))
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (error) {
        next(error)
    }
}

export const getUser =async (req, res, next) => {
    try {
        // console.log(req.params);

        const user = await User.findById(req.params.id);
        // console.log(user);
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const subscribe =async (req, res, next) => {
    try {
        // console.log(req.params);
        
        const updatedChannel = await User.findByIdAndUpdate(req.params.id, {
            $inc : {subscribers : 1}
        }, {new : true});
        // console.log(updatedChannel);

        const updatedUser = await User.findByIdAndUpdate(req.user.userId, {
            $push : {subscribedUsers : updatedChannel._id}
        }, {new : true})
        // console.log(updatedUser);

        res.status(200).json("subscribed");
    } catch (error) {
        next(error);
    }
}


export const unsubscribe =async (req, res, next) => {
    try {
        // console.log(req.params);
        
        const updatedChannel = await User.findByIdAndUpdate(req.params.id, {
            $inc : {subscribers : -1}
        }, {new : true});
        // console.log(updatedChannel);

        const updatedUser = await User.findByIdAndUpdate(req.user.userId, {
            $pull : {subscribedUsers : updatedChannel._id}
        }, {new : true})
        // console.log(updatedUser);

        res.status(200).json("unsubscribed");
    } catch (error) {
        next(error);
    }
}


export const like = (req, res, next) => {
    try {
        console.log(req.params);
        
        res.status(200).status("ok")
    } catch (error) {
        next(error)
    }
}


export const dislike = (req, res, next) => {
    try {
        console.log(req.params);
        
        res.status(200).status("ok")
    } catch (error) {
        next(error)
    }
}