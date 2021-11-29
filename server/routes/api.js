// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/sign_up", async (res, req) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    // const newUser = await user.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false });
  }
});

router.post("user/sign_in", getUser, async (res, req) => {
  const userTest = await User.find({
    email: req.body.email,
    password: req.body.password,
  });
  if (userTest == null) return res.status(400).json({ succcess: "false" });
  else return res.status(200).json({ success: "true" });
});

router.post("user/clean");

router.get("user/getlist");

router.put("user/update");

router.delete("user/id/delete");

async function getUser(res, req, next) {
  let user;
  try {
    user = await User.find({
      email: req.params.email,
      password: req.params.password,
    });
    if (user == null)
      return res.status(404).json({ message: "Cannot find user" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
