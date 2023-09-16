import express from 'express';
import cors from 'cors';

import userRouter from './routes/User.js';

import connectToDb from './db-utils/mongoos-connect.js';
import authRouter from './routes/app-users.js';

const app = express();


const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', };
  app.use(cors(corsOptions));

const PORT =process.env.PORT || 8000;
await connectToDb();
app.use(express.json());



app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);

// app.use(cors({ origin: 'http://127.0.0.1:3000' }));
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://password-reset-subaash.netlify.app');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });



app.listen(PORT, () => {
    console.log('started',PORT);
});