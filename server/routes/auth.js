const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getUser} = require("../controller/userController")
// const protect = require("../middleware/authMiddleware")

router.post("/signup",registerUser);
router.post("/signin",loginUser);
// router.get("/users",protect,getUser)

module.exports = router;
