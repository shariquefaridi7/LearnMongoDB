import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import produtRouter from './Routes/addProductRoute.js';
import cartRouter from './Routes/cartRoute.js';
import orderRouter from './Routes/orderRoute.js';


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(`mongodb+srv://shariquefaridi786:sharique786@cluster0.vtql5m7.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(4000, () => {
    console.log("server Connect")
})).catch((error) => console.log(error));

app.use("/", produtRouter);
app.use("/", cartRouter);
app.use("/", orderRouter)




