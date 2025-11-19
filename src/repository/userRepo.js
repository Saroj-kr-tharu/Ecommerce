const CURD_REPO = require("./curdRepo");
const { User } = require("../models/index");
const { AppError, HttpsStatusCodes} = require('../utlis/index')

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
            throw new AppError(
                'RepositoryError',
                'Cannot fetched BY Email ',
                'Issue in fetching By Email in UserRepo REPO',
                HttpsStatusCodes.INTERNAL_SERVER_ERROR

            );
        }
    }

}


const userRepo = new UserREpo();

module.exports = userRepo;
