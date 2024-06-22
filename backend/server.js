import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js'
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js';

//Custom Error Middle Ware (PR-26)
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB(); // Connect to MongoDB


const app= express();

app.use('/api/products', productRoutes);

app.get('/',(req,res) => {
    res.send('API IS RUNNIG');
})

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})