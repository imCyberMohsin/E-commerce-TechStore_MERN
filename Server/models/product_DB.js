const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: String,

    productPrice: Number,

    productImage: String,

    productDetail: String,
});

module.exports = mongoose.model("product", productSchema);