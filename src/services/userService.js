const CurdService = require('./curdService')
const  USER_REPO = require('../repository/userRepo')

const bcryptHelper = require('../utlis/bcryptHelper');
const {jwt_helper} = require('../utlis/jwtHelper');

class userService extends CurdService {
    constructor(){
        super(USER_REPO)
    }

    
    async loginService(data){
        try {
            const {password, email} = data;
            console.log("password => ", password, "email => ", email)
            const infoUser = await USER_REPO.getByEmail(email);
            const hashpassword = infoUser?.dataValues?.password

            const isValid = await bcryptHelper.checkPasswordService(password, hashpassword );
            
            if(!isValid)  throw new error("Invalid Credetials")


            const token = await jwt_helper.createToken(data);

            const response = {
                email: data.email,
                role: infoUser?.dataValues?.role,
                username: infoUser?.dataValues?.username,
                jwt: token,
            }
            
            return response;
            

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ")
            throw error;
        }
    }

    async verifyToken(data){
        try {
           


            const res = await jwt_helper.verifyToken(data);

             if (!res){
                throw new error(' token expeired ')
            }
            
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
            throw error;
        }
    }

}

const userservice= new userService()

module.exports = userservice;