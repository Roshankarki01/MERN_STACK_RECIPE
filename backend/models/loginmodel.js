const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    G_mail: {
      type: String,
      required: [true, "user G-mail is complusary"],
    },
    password: {
      type: String,
      required: [true, "user number is required"],
    },
  });
  
  const Login = mongoose.model('login', loginSchema);
  
  module.exports = Login;
  
  