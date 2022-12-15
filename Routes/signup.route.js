const { Router } = require("express");
const { UserModel } = require("../Models/User.model");
const signupRouter = Router();

signupRouter.post("/", async (req, res) => {
  const { password, email, name } = req.body;
  try {
    let user = await User.find({ email });
    if (user.length > 0) {
      res.send("user allerady present");
    } else {
      await new UserModel({ name, password, email }).save();
      res.send("sign up successfully");
    }
  } catch (err) {
    res.status(502).send("erroe while signup");
  }
});
module.exports = { signupRouter };
