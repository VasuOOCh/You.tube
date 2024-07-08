import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js'
import commentRouter from './routes/comment.js'
import videoRouter from './routes/video.js'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser'

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

dotenv.config()
main()
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/youtube');
}

app.use('/api/users',userRouter);
app.use('/api/videos',videoRouter);
app.use('/api/comments',commentRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "Internal server error, something went wrong !"
  return res.status(status).json({
    success : "false",
    status,
    message
  })
})

app.listen(3000, () => {
    console.log("App started at port 3000");
})