const express = require("express");
const router = express.Router();
const usercontroler = require("./../controller/controler");
const authentication = require("./../middleware/Authenticate");

router.post("/api/register", usercontroler.register);

router.post("/api/login", usercontroler.loginuser);

router.get("/api/validuser", authentication, usercontroler.validate);

module.exports = router;
