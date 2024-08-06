const express = require("express");
const {postsignin} = require("../controller/signincontroller");

const signinrouter = express.Router();

signinrouter.post("/", postsignin);

module.exports = signinrouter;
