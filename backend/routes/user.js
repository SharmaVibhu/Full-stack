var express = require('express');

var User = require('../models/user');

var userController = require("../controller/user");

var router = express.Router();

router.get("/", userController.getUser);

router.post("/", userController.saveUser);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.updateUser);

module.exports = router;