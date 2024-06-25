import path from 'path'

import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js'
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'

//Custom Error Middle Ware (PR-26)
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


connectDB(); // Connect to MongoDB


const app= express();
//BOSY-PARSER MIddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload',uploadRoutes);



app.get('/',(req,res) => {
    res.send('API IS RUNNIG');
})


app.get('/api/config/paypal', (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
  );

const __dirname = path.resolve(); //Set _dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})