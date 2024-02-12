const bcrypt = require("bcrypt");

const { userModel } = require("../models/models");
const customErrorHandler = require("../../config/customErrorHandler");
const generateTokens = require("../utils/generateTokens");
const { Op } = require("sequelize");

// Iterate through the array (optional)
// arrayData.forEach((user) => {
//   // Perform actions for each user if needed
//   // For example, you can log the user or perform some other operation
//   console.log(user);
// });

exports.userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(customErrorHandler.requiredField());
  }
  const users = await userModel.findAll({
    where: {
      expiration_time: {
        [Op.lt]: new Date(),
      },
      is_verify: false,
    },
  });
  users.forEach(async (user) => {
    for (const id in user) {
      await userModel.destroy({ where: { id: user.id } });
    }
  });

  try {
    const user = await userModel.findOne({
      where: { email: email },
    });
    if (!user) {
      return res.status(400).json({ status: false, message: "Email does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ status: false, message: "Incorrect password" });
    }

    if (user.is_verify !== true) {
      return res.status(404).json({ message: "not verified" });
    }
    console.log(user.email);
    const users = await userModel.findOne({
      where: { email: email },
      attributes: {
        exclude: ["createdAt", "updatedAt", "roles", "verification_token", "expiration_time", "is_verify", "password"],
      },
    });

    const { accessToken, refreshToken } = await generateTokens(user);

    return res.status(200).json({
      status: true,
      accessToken,
      refreshToken,
      message: "Logged in successfully",
      user: users,
    });
  } catch (error) {
    return next(error);
  }
};
