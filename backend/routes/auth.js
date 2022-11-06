// get les modules
const express = require('express');

const router = express.Router();

// all function and middleware inside poste()
const {register, login ,forgotpassword ,resetpassword} = require('../controllers/auth');
router.route("/register").post(register);
router.route("/register1").get(register);

router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;