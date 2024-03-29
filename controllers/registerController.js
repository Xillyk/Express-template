const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "username and password are required!" });

  // check duplicate username in db
  const duplicate = await User.findOne({ username: user }).exec();

  if (duplicate) {
    return res.status(409).json({ message: "username duplicated!" });
  }

  try {
    // encrypt password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    // create and store new user
    const result = await User.create({
      username: user,
      password: hashedPwd,
    });

    console.log(result)
    
    res.status(201).json({ message: `New user ${user} has created.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleNewUser,
};
