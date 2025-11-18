const express = require('express');

const router = express.Router();

const {authController, adminController,CustumerControllers } = require('../../controllers/index')
const {signupAndLoginMiddle, verifyTokenMiddle} = require('../../middlewares/userMiddlewares');
const { adminverifyTokenMiddle} = require('../../middlewares/adminMiddlewares');

router.get("/ping", (req, res) => {
  return res.json({ message: "Auth Server is good to GO" });
});

// user 
router.get( "/auth/signup", signupAndLoginMiddle, authController.signup );
router.post( "/auth/login", signupAndLoginMiddle, authController.signin );
router.get( "/auth/veriyToken", verifyTokenMiddle, authController.veriyToken );

// admin 
router.post( "/products/add", adminverifyTokenMiddle,  adminController.addProduct );
router.delete( "/products/delete", adminverifyTokenMiddle, adminController.deleteProduct );
router.patch( "/products/update", adminverifyTokenMiddle, adminController.editProduct );

// custumer 
// browse, add to cart , Checkout 
router.get( "/products",  CustumerControllers.getProduct );
 


module.exports = router;