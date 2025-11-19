const CurdService = require('./curdService')
const  USER_REPO = require('../repository/userRepo')

const bcryptHelper = require('../utlis/bcryptHelper');
const {jwt_helper} = require('../utlis/jwtHelper');
const {  ServiceError} = require('../utlis/index')

class userService extends CurdService {
    constructor(){
        super(USER_REPO)
    }

    
    async loginService(data){
        try {
            const {password, email} = data;
            const infoUser = await USER_REPO.getByEmail(email);
            const hashpassword = infoUser?.dataValues?.password

            const isValid = await bcryptHelper.checkPasswordService(password, hashpassword );
            
            if(!isValid)  
                throw new AppError(
                        'Login Errors',
                        `Invalid Creditials`,
                        'Issue in login  in userService in  login service function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );


            const token = await jwt_helper.createToken({...data, id: infoUser?.dataValues?.id,});
            const response = {
                email: data.email,
                id: infoUser?.dataValues?.id,
                role: infoUser?.dataValues?.role,
                username: infoUser?.dataValues?.username,
                jwt: token,
            }
            
            return response;
            

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ")
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw new ServiceError()
        }
    }

    async verifyToken(data){
        try {
           
            const res = await jwt_helper.verifyToken(data);

             if (!res)
                throw new AppError(
                        'Verify Token Errors',
                        `Token is invalid or Expired`,
                        'Issue in verifying token in userService in  verifyToken function ',
                        HttpsStatusCodes.ServerErrosCodes.INTERNAL_SERVER_ERROR

                    );
            
            const infoUser = await USER_REPO.getByEmail(res.data.email);
            const response = {
                email: res.data.email,
                role: infoUser?.dataValues?.role,
                username: infoUser?.dataValues?.username,
                jwt: data,
            }
            
            return response;
            

        } catch (error) {
            console.log("something went wrong in service curd level  (verifyToken) ")
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw new ServiceError()
        }
    }
    
    async getAllUserPagtion( page, limit, data){
        try {
           
            
            const offset = (page - 1) * limit;
            const response = await USER_REPO.getALLUserProPagation(offset, limit, data);

           
            
            return response;
            

        } catch (error) {
            console.log("something went wrong in service curd level  (getAllUser) ")
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw new ServiceError()
        }
    }
}

const userservice= new userService()

module.exports = userservice;