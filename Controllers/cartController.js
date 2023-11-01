import { cartModel } from "../Models/cartModel.js";
export const addCart = async (req, res) => {
    const { userId, productName } = req.body;


    const checkUser = await cartModel.find({ userId });
    let productNo = 1
    if (checkUser) {
        const checkAddProduct = await cartModel.findOne({ productName });

        if (checkAddProduct) {
            const productNo = checkAddProduct.productNumber;
            console.log(productNo)
            const udateData = await cartModel.findOneAndUpdate({ productName }, { productNumber: (productNo + 1) });
            console.log(udateData);
            res.status(200).send("Update");

        } else {
            const resData = await cartModel.create({ userId, productName, productNumber: productNo });
            res.status(200).send(resData);
        }
    } else {
        const resData = await cartModel.create({ userId, productName, productNumber: productNo });
        res.status(200).send(resData)
    }



}

export const delCart = async (req, res) => {

    const { id } = req.params;
    await cartModel.deleteOne({ _id: id });
    res.send("Delete")

}