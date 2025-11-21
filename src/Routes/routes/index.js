const express = require('express');

const router = express.Router();

const {authController, adminController,CustumerControllers } = require('../../controllers/index')
const {adminMiddleware,custumerMiddleware,userMiddleware} = require('../../middlewares/index')



router.get("/pong", (req, res) => {
  return res.json({ message: "Auth Server is good to GO" });
});

router.get("/pong", (req, res) => {
  return res.json({ message: "cicd  is good to GO" });
});

// user 
router.post( "/auth/signup", userMiddleware.signupAndLogin, authController.signup );
router.post( "/auth/login", userMiddleware.signupAndLogin, authController.signin );
router.get( "/auth/veriyToken", userMiddleware.verifyToken, authController.veriyToken );
router.post( "/auth/login/otp", authController.loginByOTP );
router.post( "/auth/login/otp-verify", userMiddleware.verifyOTP, authController.VerifyOTP );

// admin 
router.post( "/products/add",adminMiddleware.verifyToken,  adminController.addProduct );
router.delete( "/products/delete", adminMiddleware.verifyToken, adminController.deleteProduct );
router.patch( "/products/update", adminMiddleware.verifyToken, adminController.editProduct );
router.get( "/orders",  adminMiddleware.verifyToken, adminController.getAllOrders );
router.patch( "/orders/update",  adminMiddleware.verifyToken, adminController.editOrders );
router.get( "/users",  adminMiddleware.verifyToken, adminController.getAllUsers );

// custumer 
router.get( "/products",  CustumerControllers.getProduct );
router.post( "/orders/addOrder",  custumerMiddleware.verifyToken, CustumerControllers.addOrders );
router.get( "/orders/getByUser",  custumerMiddleware.verifyToken, CustumerControllers.getOrdersByUserId );
 
 
 
module.exports = router;