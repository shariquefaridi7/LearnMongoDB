import productDel from '../Models/addProductModel.js'
export const addProduct = async () => {

    const { productName } = req.body;
    const resData = await productDel.create({ productName });
    resData.status(200).send(resData);

}

export const getProduct = async () => {
    const { _id } = req.params;
    const resData = await productDel.find({ _id });
    resData.status(200).send(resData);
}

export const delProduct = async () => {
    const { _id } = req.params;
    const resData = await productDel.delete({ _id });
    resData.status(200).send(resData);
}

export const updateProduct = async () => {
    const { _id } = req.params;
    const resData = await productDel.update({ _id });
    resData.status(200).send(resData);
}