
const jwt = require('jsonwebtoken');
const { PRIVATEJWT } = require("../config/serverConfig");
const {AppError, HttpsStatusCodes} = require('./index')

class JWT {
  async createToken(data, time= '10m') {
    try {
      const token = await jwt.sign({ data }, PRIVATEJWT, {
        expiresIn: time, 
      });

      return token;
    } catch (error) {
      console.log("Something went wrong in service layer (creating the token)");
      throw new AppError(
                        'bcrypt Error',
                        `Creditals invlaid`,
                        'Issue in verify Creaditials  in bcryptHelper in  Bcrypt_helper_class function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );
    }
  }

  async verifyToken(token) {
    try {
      const response = jwt.verify(token, PRIVATEJWT);
      if (!response) throw { error: "Invalid Token  " };


      return response;
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        console.log("Token has expired");
        throw { error: "TokenExpiredError", message: "Token has expired" };
      } else {
        console.log("Something went wrong in service layer (verify token)");
        throw new AppError(
                        'bcrypt Error',
                        `Creditals invlaid`,
                        'Issue in verify Creaditials  in bcryptHelper in  Bcrypt_helper_class function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );
      }
    }
  }
}

const jwt_helper = new JWT();

module.exports = { jwt_helper };
