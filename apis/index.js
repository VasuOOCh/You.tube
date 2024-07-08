import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js'
import commentRouter from './routes/comment.js'
import videoRouter from './routes/video.js'
import authRouter from './routes/auth.js'


dotenv.config()
main()
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/youtube');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use('/users',userRouter);
app.use('/videos',videoRouter);
app.use('/comments',commentRouter);
app.use('/auth',authRouter);

app.listen(3000, () => {
    console.log("App started at port 3000");
})