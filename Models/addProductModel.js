import mongoose from "mongoose";

const product = new mongoose.Schema({
    productName: {
        typeof: String,

    }


});

const productDel = new mongoose.model("adminProduct", product);
export default productDel;