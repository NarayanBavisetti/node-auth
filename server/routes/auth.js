const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getUser,getUserById,editUser,deleteUser,logoutUser, allUsers} = require("../controller/userController")
const protect  = require("../middleware/authMiddleware")

router.post("/signup",registerUser);
router.post("/login",loginUser);
 router.get("/user",protect,getUser)
 router.get("/allusers",protect,allUsers)
 router.get("/user/:id",protect,getUserById)
 router.put("/edit/:id",protect,editUser)
 router.delete("/delete/:id",deleteUser)
 router.get("/logout",logoutUser)

module.exports = router;
