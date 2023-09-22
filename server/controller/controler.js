const Users = require("./../model/userschema");
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  const haspassword = await bcrypt.hash(password, 10);
  const hascpassword = await bcrypt.hash(cpassword, 10);
  try {
    const preuser = await Users.findOne({ email: email });
    if (preuser) {
      res.status(400).json({ message: "the user is already exits" });
    } else {
      const newuser = await Users({
        name: name,
        email: email,
        phone: phone,
        password: haspassword,
        cpassword: hascpassword,
      });
      const saveuser = await newuser.save();
      res.status(200).json({ status: 200, saveuser });
    }
  } catch (error) {
    res.status(400).json(error), console.log(error);
  }
};

//login user

exports.loginuser = async (req, res) => {
  try {
    const user = await Users.findOne({
      email: req.body.email,
    });
    if (user) {
      const validpassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validpassword) {
        const token = await user.GeneralAuthtoken();
        console.log(token);

        //setcookie
        const result = {
          user,
          token,
        };
        res.status(200).json({ status: 200, result });
      } else {
        res.status(400).json("authentical error");
      }
    } else {
      res.status(400).json("authenticals error");
    }
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.validate = async (req, res) => {
  try {
    const validuser = await Users.findOne({ _id: req.userid });
    res.status(200).json({ status: 200, validuser });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
