const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require("../models/userSchema");

const registerUser =  async (req, res) => {
    const { name, email, password,city,address,gender,age } = req.body;
 console.log(req.body);
    if (!name || !email || !password || !city || !address  || !gender || !age) {
      return res.json({ message: "plz fill all the feilds" });
    }
  
    try {
      const userexists = await User.findOne({ email });
      if (userexists) {
        return res.status(422).json({ message: "Email already exists" });
      } 

      //hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password,salt)

      const user = await new User({ name, email, password:hashedPassword,city,address,gender,age });
      const isMatch = await user.save();
      if (isMatch) {
        res.status(201).json({_id:user.id,name:user.name,email:user.email,city:user.city,address:user.address,gender:user.gender,age:user.age,token: generateToken(user._id)});
      }
    } catch (error) {
      console.log(error);
    }
  }



const loginUser = async (req, res) => {
  const { email, password } = req.body;
console.log(req.body)
  if (!email || !password) {
    return res.json({ message: "plz fill all the feilds" });
  }

  try {
    const userexists = await User.findOne({ email });

    // const token = await userexists.generateAuthToken();

    if (!userexists) {
      return res.status(422).json({ message: "invalid credentials e" });
    }
    const isMatch = await bcrypt.compare(password, userexists.password);
    if (isMatch) {
        res.status(201).json({_id:userexists.id,name:userexists.name,email:userexists.email,token: generateToken(userexists._id)})
        console.log(userexists._id)
    } else {
      return res.status(422).json({ message: "invalid credentials p" });

    }

  } catch (error) {
    console.log(error);
  }
};





const getUser =  async(req,res) => {
    const{_id,name,email} = await req.user
    res.status(201).json({
    
        id:_id,
        name,email
    })
}

const generateToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET,{
        expiresIn:'30d',

    })
}

module.exports = {
    loginUser,registerUser,getUser
}



