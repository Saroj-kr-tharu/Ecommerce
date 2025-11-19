const dotenv = require('dotenv')
const bcrypt = require('bcrypt')

dotenv.config()

module.exports = { 
    PORT  : process.env.PORT,
    salt: bcrypt.genSaltSync(10),
    PRIVATEJWT: process.env.PRIVATEJWT,
    
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASSWORD: process.env.EMAIL_PASS,

}