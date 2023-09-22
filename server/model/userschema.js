const mongoose = require("mongoose");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");

//create schema

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function() {
        return validator.validate(this.email);
      },
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

//create mongoose model
Userschema.methods.GeneralAuthtoken = async function() {
  try {
    const token23 = jwt.sign({ _id: this._id }, process.env.SECRET, {
      expiresIn: process.env.EXPIRE,
    });
    this.tokens = this.tokens.concat({ token: token23 });
    await this.save();
    return token23;
  } catch (err) {
    console.log(err);
  }
};

const Users = new mongoose.model("user", Userschema);

module.exports = Users;
