import express from 'express';
import connectDB from './db/connectionDB';
import productRoute from './routes/productRoute';
const app = express();

app.use(express.json());

app.use('/api', productRoute);

connectDB();

export default app;
