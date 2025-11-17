const CURD_REPO = require("./curdRepo");
const { User } = require("../models/index");

class UserREpo extends CURD_REPO { 

    constructor(){
        super(User)
    }

    async getByEmail (email) { 
        try {
            const res = await this.model.findOne({
                where: {email},
            });
            return res; 
        } catch (error) {
            console.log("something went wrong in  user Repo curd level (getByEmail) ")
            throw error;
        }
    }

}


const userRepo = new UserREpo();

module.exports = userRepo;
