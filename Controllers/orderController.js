import { orderModel } from "../Models/orderModel.js";
import { cartModel } from "../Models/cartModel.js";
export const addOrder = async (req, res) => {

    const { userId, productName, price } = req.body;
    const { id } = req.params;

    const resData = await orderModel.create({ userId, productName, price });
    if (resData) {
        res.status(200).send("Order Success");

        await cartModel.deleteOne({ _id: id });
        res.status(200)
    } else {
        res.status(400).send("Something Went Wrong");
    }


}

export const getOrder = async (req, res) => {
    const resData = await orderModel.find().populate("userId");
    res.status(200).send(resData)
}