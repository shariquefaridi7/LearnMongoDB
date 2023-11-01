import productDel from '../Models/addProductModel.js'
export const addProduct = async (req, res) => {

    const { userName } = req.body;
    const resData = await productDel.create({ userName });

    res.status(200).send(resData);

}

export const getProduct = async (req, res) => {
    const { id } = req.params;

    const resData = await productDel.findOne({ _id: id });
    res.status(200).send(resData);

}

export const delProduct = async (req, res) => {
    const { id } = req.params;
    await productDel.deleteOne({ _id: id });
    res.status(200).send("Delete Success");
}

export const updateProduct = async (req, res) => {
    const updateUserName = req.body.userName;

    const { id } = req.params;

    const a = await productDel.findOneAndUpdate({ _id: id }, { userName: updateUserName });
    if (a) {
        res.status(200).send("Update Success")
    } else {
        res.status(400).send("something is wrong")
    }

}