const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ msg: "An Error Occured", error: err }));
}

module.exports.addAProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({ product: newProduct })
        })
        .catch(err => res.json({ msg: "An Error Occured", error: err }));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ product: oneProduct })
        })
        .catch(err => res.json({ msg: "An Error Occured", error: err }));
}

module.exports.editOneProduct = (req, res) => {
    Product.findOneAndUpdate({_id : req.params.id}, req.body, {new: true})
        .then(editProduct => {
            res.json({product: editProduct})
        })
        .catch(err => res.json({ msg: "An Error Occured", error: err }));
}

module.exports.deleteOneProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => {
            res.json({product: deletedProduct})
        })
        .catch(err => res.json({ msg: "An Error Occured", error: err }));
}