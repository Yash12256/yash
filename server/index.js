// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import userRoutes from './routes/users.js'
// import questionRoutes from './routes/Questions.js';
// import answerRoutes from './routes/Answers.js';
// import dotenv from 'dotenv'
// const app =express();
// dotenv.config();
// app.use(express.json({limit: "30mb", extended: true}))
// app.use(express.urlencoded({limit: "30mb", extended: true}))
// app.use(cors());

// app.get('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })
// app.use('/user', userRoutes)
// app.use('/Questions', questionRoutes)
// app.use('/answer',answerRoutes)
// const PORT = process.env.PORT || 5000

// // const COONECTION_URL='mongodb+srv://admin:admin@stack-overflow-clone.ivggy0e.mongodb.net/?retryWrites=true&w=majority'
// const COONECTION_URL='mongodb+srv://abc:abc@cluster0.zascdsn.mongodb.net/?retryWrites=true&w=majority'

// // const DATABASE_URL= process.env.COONECTION_URL

// // mongoose.connect( COONECTION__URL, { useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true})

//     .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
//     .catch((err) => console.log(err.message));


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use('/user', userRoutes);
app.use('/Questions', questionRoutes);
app.use('/answer', answerRoutes);

const PORT = process.env.PORT || 5000;

// const CONNECTION_URL = 'mongodb+srv://admin:admin@stack-overflow-clone.ivggy0e.mongodb.net/?retryWrites=true&w=majority';
// const CONNECTION_URL = 'mongodb+srv://abc:abc@cluster0.zascdsn.mongodb.net/?retryWrites=true&w=majority';

const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }))
  .catch((err) => console.log(err.message));
