import express from 'express';
import userRouter from './routes/User.js';

import connectToDb from './db-utils/mongoos-connect.js';

const app = express();
const PORT =process.env.PORT || 8000;
await connectToDb();
app.use(express.json());
app.use('/api/users',userRouter);


app.listen(PORT, () => {
    console.log('started');
});