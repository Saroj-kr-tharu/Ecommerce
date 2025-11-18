
const userservice = require('../services/userService');
 const {ClientErrorsCodes} = require('../utlis/errors_codes')
 
const adminverifyTokenMiddle  = async(req, res, next) => {
    const token = req?.headers['x-access-token'];
    if (!token ) {
        
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
        data: {},
        message: "token is missing   ",
        success: false,
        });
    }

    
    try {
        const response = await userservice.verifyToken(token)

        const role = response?.role;
        console.log('role => ', response?.role)
        if(role == 'ADMIN'){
          return  next();
          
        }

        return res.status(ClientErrorsCodes.UNAUTHORISED).json({
            data: {},
            message: "You are not admin",
            success: false,
        });

          
        } catch (error) {
           return res.status(ClientErrorsCodes.UNAUTHORISED).json({
            data: {},
            message: "Invalid token or Token expired",
            success: false,
        });
        }
  };

    

   




module.exports = {
 
 adminverifyTokenMiddle
};
