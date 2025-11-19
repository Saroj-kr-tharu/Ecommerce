const CurdService = require('./curdService')
const  {USER_REPO, OTP_Repo} = require('../repository/index')

const bcryptHelper = require('../utlis/bcryptHelper');
const {jwt_helper} = require('../utlis/jwtHelper');
const {  AppError, HttpsStatusCodes, ServiceError} = require('../utlis/index');


const sender = require("../config/emailConfig");

class OTPService extends CurdService {
    constructor(){
        super(OTP_Repo)
    }

    async #sendEmail(mailFrom, mailTo, mailSubject, mailBody){
        try {
            const response = await sender.sendMail({
                    from: mailFrom,
                    to: mailTo,
                    subject: mailSubject,
                    text: mailBody,
                });

                return response
        } catch (error) {
            console.log("Something went wrong in email-service");
            throw new AppError(
                        'Send Email Errors',
                        `Failed to send the Email `,
                        'Issue in sending Email  in OTPService in  sendEmail function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );
        }

    }
    
    async sendOTP(email){
        try {
           
            // 1. get user info from email 
            // 2. check user is exist 
            // 3. generate otp 
            // 4. add userid and expireat 5 min 
            // 5. create row 
            // 6. send otp 
            
            const infoUser = await USER_REPO.getByEmail(email);

            if(!infoUser)  
                throw new AppError(
                        'OTP Login Errors',
                        `User with ${email} is not exist`,
                        'Issue in login  in OTPService in  loginOTPservice function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );

            const code = Math.floor(100000 + Math.random() * 900000).toString(); 
            const userId = infoUser?.dataValues?.id;
            const expiresAt =  new Date(Date.now() + 5 * 60 * 1000); // 5 mintues 
                
            await OTP_Repo.create({userId, code, expiresAt})


            // Send OTP 
            const mailFrom = "sarojtestingkrtharu@gmail.com"
            const response = await this.#sendEmail(mailFrom, email, "otp", `OTP : ${code}`);
            if(!response) 
                throw new AppError(
                        'OTP Sent Errors',
                        `OTP to  ${email} is not sent `,
                        'Issue in sending  in OTPService in  loginOTPservice function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );
            
            return `OTP sent to ${email}`;
            

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ")
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw error
        }
    }

    async verifyOTP(email, otp){
        try {
           
            // 1. get user info email is exist or not 
            // 1.2 otp convert to hash 
            // 2. get otp is exist or not 
            // 3. verify otp 
            // 3.1 check if the otp exipre date 
            // 4. generate jwt token 
            // 5. update otp date used to true 
            // 6. return jwt token 
            
            const infoUser = await USER_REPO.getByEmail(email);
            if(!infoUser)  
                throw new AppError(
                    'OTP Login Errors',
                    `User with ${email} is not exist`,
                    'Issue in login  in OTPService in  verifyOTP function ',
                    HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR
                    
                );
            
            const userId= infoUser?.dataValues?.id;
            
            const otpinfo = await OTP_Repo.getByUserId(userId);
            const expiresAt = otpinfo?.dataValues?.expiresAt;

            console.log(expiresAt)
                
            if(!otpinfo)
                throw new AppError(
                        'OTP Login Errors',
                        `OTP not Exist or already used`,
                        'Issue in login  in OTPService in  verifyOTP function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR
                    );


            if(new Date() > expiresAt)
                throw new AppError(
                    'OTP Login Errors',
                    `OTP with ${email} is expire `,
                    'Issue in login  in OTPService in  verifyOTP function ',
                    HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR
                );

            const isValid = await bcryptHelper.checkPasswordService(otp, otpinfo?.dataValues?.code);

            if(!isValid)
                 throw new AppError(
                    'OTP Login Errors',
                    `OTP with ${email} is not matched`,
                    'Issue in login  in OTPService in  verifyOTP function ',
                    HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR
                );
        

            const data = {
                email,
                id: infoUser?.dataValues?.id,
                role: infoUser?.dataValues?.role,
                username: infoUser?.dataValues?.username,
            }


            await OTP_Repo.delete(userId)
            const token = await jwt_helper.createToken(data);

            
            return {
                email,
                id: infoUser?.dataValues?.id,
                role: infoUser?.dataValues?.role,
                username: infoUser?.dataValues?.username,
                token
            };
            

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ", error)
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw error
        }
    }



}

const oTPservice= new OTPService()

module.exports = oTPservice;