import mongoose from "mongoose"
import User from "../models/User.js";
import bcrypt from "bcrypt"
import { createError } from "../error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req,res,next) => {
    try {
        // console.log(req.body);
        const hashedPassword =await bcrypt.hash(req.body.password,10);
        // console.log(hashedPassword);
        const newUser = new User({
            ...req.body,
            password : hashedPassword
        })
        await newUser.save();
        // console.log(newUser);
        res.status(200).json("User created")
    } catch (error) {
        next(error) // passing general error to error handling middlware
    }
}

export const signin = async (req,res,next) => {
    try {
        // console.log(req.body);

        const existingUser = await User.findOne({name: req.body.name});
        // console.log(existingUser);
        if(!existingUser) return next(createError(404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, existingUser.password)
        // console.log(isPasswordCorrect);
        if(!isPasswordCorrect) return next(createError(400, "Username/password is incorrect"))

        const token = jwt.sign({userId : existingUser._id} ,process.env.JWT_SECRET, {expiresIn : 7*24*60*60*1000})
        // console.log(token);
        const {password, ...otherDetails} = existingUser._doc
        res.cookie("token", token, {maxAge : 7*24*60*60*1000, httpOnly : true}).status(200).json(otherDetails);
    } catch (error) {
        next(error) // passing general error to error handling middlware
    }
}
export const google = async (req,res) => {

}