import mongoose from "mongoose";

const product = new mongoose.Schema({
    userName: {
        type: String,

    }


});

const productDel = new mongoose.model("adminProduct", product);
export default productDel;