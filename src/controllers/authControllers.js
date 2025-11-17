const UserService = require('../services/userService')


class AuthController { 

    async signup(req,res) {
        try {
            
    
            const data = req?.body;
            const response = await UserService.createService(data);
            
            return res.status(201).json({
                message: "Successfully to Signup",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (signup) ")
            return res.status(501).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }
    
    async signin(req,res) {
        try {
            
            
            const data = req?.body;
            const response = await UserService.loginService(data);
            
            return res.status(201).json({
                message: "Successfully to login",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (signup) ")
            return res.status(501).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }

     async veriyToken(req,res) {
        try {
            
            
            const token = req?.headers['x-access-token'];
            const response = await UserService.verifyToken(token);
            
            return res.status(201).json({
                message: "Successfully to login",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (verifytoken) ")
            return res.status(501).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }

}



const authController = new AuthController();

module.exports = authController;