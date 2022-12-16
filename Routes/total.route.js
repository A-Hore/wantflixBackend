const { Router } = require("express");
const {Total  } = require("../Models/Total.model");
const totalRouter = Router();
totalRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await Total.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});

totalRouter.get("/search", async (req, res) => {
    let title = req.query.q;
    try {
      let searchm = await Total.find({
        Title: { $regex: title, $options: "$i" }
      });
      console.log(title)
      res.send(searchm);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = { totalRouter};