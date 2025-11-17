const bcrypt = require("bcrypt");

const { salt } = require("../config/serverConfig");

class Bcrypt_helper_class {
  async checkPasswordService(plainpasword, hash) {
    try {
      const match = bcrypt.compareSync(plainpasword, hash);
      if (!match) throw "invalid crededitals";
      return match;
    } catch (error) {
      console.log(
        "Something went wrong in bcrypt helper layer (checkPasswordService)"
      );
      throw error;
    }
  }

  
}

const bcryptHelper = new Bcrypt_helper_class();

module.exports = bcryptHelper;
