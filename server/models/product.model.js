const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "title is required"],
        minlength : [1, "length must be at least 1 character"]
    },
    price : {
        type : Number,
        required : [true, "price is required"],
        min : [0.00, "price cannot be negative"]
    },
    description : {
        type : String,
        required : [true, "description is required"],
        minlength : [1, "length must be at least 1 character"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;