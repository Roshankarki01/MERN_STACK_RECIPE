const signupmodel = require("../models/signupmodel");

const postsignin = async (req, res) => {
    try {
        const { F_name, L_name, G_mail, Phonenumber, password } = req.body;
        const newuser = await signupmodel.create({ F_name, L_name, G_mail, Phonenumber, password });
        res.status(201).json({ success: true, message: 'New accound added', newuser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports ={postsignin};