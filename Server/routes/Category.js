const express = require("express");
const router = express.Router();

router.get('/sel', (req, res) => {
    res.json({ msg: "Category Route" });
});

router.post('/add', (req, res) => {

});

module.exports = router;