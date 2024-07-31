const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/storage")

//TODO http://localhost/storage GET, POST, DELETE, PUT


router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);

router.post("/", uploadMiddleware.single("myfile"), createItem);

router.delete("/:id", validatorGetItem, deleteItem);



module.exports = router;