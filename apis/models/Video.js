import mongoose from 'mongoose';

const videoSchmema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    videoUrl : {
        type : String,
        required : true,
    },
    imgUrl : {
        type : String,
        required : true,
    },
    views : {
        type : Number,
        default : 0
    },
    tags : [String],
    likes : [String],
    dislikes : [String],

}, {timestamps : true});

const Video = mongoose.Model("Video", videoSchmema);
export default Video;