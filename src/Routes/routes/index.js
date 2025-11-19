const express = require('express');

const router = express.Router();

const {authController, adminController,CustumerControllers } = require('../../controllers/index')
const {adminMiddleware,custumerMiddleware,userMiddleware} = require('../../middlewares/index')



router.get("/ping", (req, res) => {
  return res.json({ message: "Auth Server is good to GO" });
});

// user 
router.get( "/auth/signup", userMiddleware.signupAndLogin, authController.signup );
router.post( "/auth/login", userMiddleware.signupAndLogin, authController.signin );
router.get( "/auth/veriyToken", userMiddleware.verifyToken, authController.veriyToken );

// admin 
router.post( "/products/add",adminMiddleware.verifyToken,  adminController.addProduct );
router.delete( "/products/delete", adminMiddleware.verifyToken, adminController.deleteProduct );
router.patch( "/products/update", adminMiddleware.verifyToken, adminController.editProduct );
router.get( "/orders",  adminMiddleware.verifyToken, adminController.getAllOrders );
router.patch( "/orders/update",  adminMiddleware.verifyToken, adminController.editOrders );

// custumer 
router.get( "/products",  CustumerControllers.getProduct );
router.post( "/orders/addOrder",  custumerMiddleware.verifyToken, CustumerControllers.addOrders );
router.get( "/orders/getByUser",  custumerMiddleware.verifyToken, CustumerControllers.getOrdersByUserId );
 
 
 
module.exports = router;