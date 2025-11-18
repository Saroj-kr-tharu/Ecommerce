
const {ClientErrorsCodes} = require('../utlis/errors_codes')

const signupAndLoginMiddle = (req, res, next) => {
  if (!req.body.email || !req.body.password ) {
    console.log("Something went wrong in auth middleware");
    
    return res.status(ClientErrorsCodes.BAD_REQUEST).json({
      data: {},
      message: "Email or Password is missing  ",
      success: false,
    });
  }

  next();
};


const verifyTokenMiddle = (req, res, next) => {
    const token = req?.headers['x-access-token'];
    if (!token ) {
        console.log("token is missing ");
        
        return res.status(ClientErrorsCodes.UNAUTHORISED).json({
        data: {},
        message: "Email or Password is missing  ",
        success: false,
        });
    }

  next();
};





module.exports = {
 signupAndLoginMiddle,
 verifyTokenMiddle
};
