const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const authMiddleware = require("../middleware/session");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const checkRol = require("../middleware/rol");

//TODO http://localhost/traacks GET, POST, DELETE, PUT

router.get("/", authMiddleware, getItems );

router.get("/:id", authMiddleware, validatorGetItem, getItem );

//router.post("/", validatorCreateItem, customHeader, createItem);
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);

router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem );

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem );


module.exports = router;