const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controllers/storage")

//TODO http://localhost/storage GET, POST, DELETE, PUT


router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;