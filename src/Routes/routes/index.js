const express = require('express');

const router = express.Router();

const {authController} = require('../../controllers/index')
const {signupAndLoginMiddle, verifyTokenMiddle} = require('../../middlewares/userMiddlewares');

router.get("/ping", (req, res) => {
  return res.json({ message: "Auth Server is good to GO" });
});

// user 

router.get( "/auth/signup", signupAndLoginMiddle, authController.signup );

router.post( "/auth/login", signupAndLoginMiddle, authController.signin );
router.get( "/auth/veriyToken", verifyTokenMiddle, authController.veriyToken );

module.exports = router;