const jwt = require("jsonwebtoken");
const Users = require("./../model/userschema");
const Authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const verifytoken = jwt.verify(token, process.env.SECRET);

    const rootuser = await Users.findOne({ _id: verifytoken._id });
    if (!rootuser) {
      throw new error("user not found");
    }
    req.token = token;
    req.rootuser = rootuser;
    req.userid = rootuser._id;

    next();
  } catch {
    next("authentical failur");
  }
};

module.exports = Authentication;
