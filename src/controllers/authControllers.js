const {userService} = require('../services/index')
const {SucessCode} = require('../utlis/Errors/https_codes')

class AuthController { 

    async signup(req,res) {
        try {
            
    
            const data = req?.body;
            const response = await userService.createService(data);
            
            return res.status(SucessCode.OK).json({
                message: "Successfully to Signup",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (signup) ")

            return res.status(error.statusCode).json({
                message: error.message,
                sucess: false,
                data: {},
                err: error.explanation,
            });
        }
    }
    
    async signin(req,res) {
        try {
            
            
            const data = req?.body;
            const response = await userService.loginService(data);
            
            return res.status(SucessCode.CREATED).json({
                message: "Successfully to login",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (signup) ")
            return res.status(error.statusCode).json({
                message: error.message,
                sucess: false,
                data: {},
                err: error.explanation,
            });
        }
    }

     async veriyToken(req,res) {
        try {
            
            
            const token = req?.headers['x-access-token'];
            const response = await userService.verifyToken(token);
            
            return res.status(SucessCode.OK).json({
                message: "Successfully to login",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (verifytoken) ")
            return res.status(error.statusCode).json({
                message: error.message,
                sucess: false,
                data: {},
                err: error.explanation,
            });
        }
    }

}



const authController = new AuthController();

module.exports = authController;