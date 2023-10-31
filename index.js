import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import produtRouter from './Routes/addProductRoute.js';


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var username = encodeURIComponent("Yproduct@admin");
var password = encodeURIComponent("product123");
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.eecbc.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log("connect")).catch((error) => console.log(error));

app.use("/", produtRouter);
app.listen(4000, () => {
    console.log("server Connect")
})



