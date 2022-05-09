const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const registerUser = async (req, res) => {
  const { name, email, password, city, address, gender, age } = req.body;
  console.log(req.body);
  if (!name || !email || !password || !city || !address || !gender || !age) {
    return res.json({ message: "plz fill all the feilds" });
  }

  try {
    const userexists = await User.findOne({ email });
    if (userexists) {
      return res.status(422).json({ message: "Email already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
      city,
      address,
      gender,
      age,
    });
    const isMatch = await user.save();
    if (isMatch) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        city: user.city,
        address: user.address,
        gender: user.gender,
        age: user.age,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  let token;
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.json({ message: "plz fill all the feilds" });
  }

  try {
    const userexists = await User.findOne({ email });

    // const token = await userexists.generateAuthToken();

    if (!userexists) {
      return res.status(400).json({ message: "invalid credentials e" });
    }
    const isMatch = await bcrypt.compare(password, userexists.password);

    if (isMatch) {
      token = await userexists.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });

      res.status(201).json({
        message: "user signin successfully",
      });
    } else {
      return res.status(400).json({ message: "invalid credentials p" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  res.send(req.rootUser);
};

const getUserById = async (req, res) => {
  const user = await User.findById({_id:req.params.id});
  res.status(200).json(user);
};

const allUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const editUser = async (req, res) => {
  // const user = User.findById(req.params.id);
  // console.log(user);
  // if (!user) res.status(422).send("data is not found");
  // else {
  //   user.name = req.body.name;
  //   user.age = req.body.age;
  //   user.address = req.body.address;
  //   user.gender = req.body.gender;
  //   user.city = req.body.city;
  //   console.log(user);
  //   const isSaved = await user.save();
  //   if (isSaved) {
  //     res.json("data updated!");
  //   } else {
  //     res.status(400).send("Update not possible");
  //   }
  // }
  try {
    const {id} = req.params;
  const updateduser = await User.findByIdAndUpdate(id,req.body,{
    name :req.body.name,
    email:req.body.email,
   age : req.body.age,
    address : req.body.address,
    gender : req.body.gender,
    city : req.body.city,
});

console.log(updateduser);
res.status(201).json(updateduser);

} catch (error) {
res.status(422).json(error);
}
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete({_id:req.params.id})
  if (user) {
    res.status(200).json({
      message: "Sucessfully deleted",
    });
  } else {
    res.status(400).json({
      message: "Not deleted",
    });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logout");
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  loginUser,
  registerUser,
  getUser,
  getUserById,
  allUsers,
  editUser,
  deleteUser,
  logoutUser,
};
