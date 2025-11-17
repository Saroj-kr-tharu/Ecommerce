// const { jwt_helper } = require("../utlis/jwtHelps")



const signupAndLoginMiddle = (req, res, next) => {
  if (!req.body.email || !req.body.password ) {
    console.log("Something went wrong in auth middleware");
    
    return res.status(400).json({
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
        
        return res.status(400).json({
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
