import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminProduct",
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productNumber: {
        type: Number,
        required: true
    }


});

export const cartModel = new mongoose.model("cart", cartSchema);