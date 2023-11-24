const express = require("express");
const router = express.Router();
const productModel = require('../models/product_DB');   // Product Schema


// Select From DB
router.get('/sel', async(req, res) => {
    let data = await productModel.find();
    res.json(data);
});

// DELETE
router.post('/del', async(req, res) => {
    let data = await productModel.findByIdAndDelete(req.body.id);
    res.json({msg : "Deleted"});
});

// Insert To DB
router.post('/add', async (req, res) => {
    console.log(req.body);

    let objImg = req.files.pImg;
    objImg.mv("./public/images/" + objImg.name, async (err) => {
        if (err) {
            throw err;
        } else {
            let InsObj = {
                productName: req.body.pName,
                productPrice: req.body.pPrice,
                productImage: objImg.name,
                productDetail: req.body.pDetail,
            }
            await productModel.create(InsObj);
        }
    })
    res.json({ med: "Submited to node" })
});

module.exports = router;