import User from "../model/User";
import bcrypt from "bcrypt";
import { Request, Response } from 'express';

const handleNewUser = async (req: Request, res: Response) => {
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
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export = {
  handleNewUser
}