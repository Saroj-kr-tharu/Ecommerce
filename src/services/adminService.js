const CurdService = require('./curdService')
const  {Product_Repo} = require('../repository/index')


class adminService extends CurdService {
    constructor(){
        super(Product_Repo)
    }

    async deleteByIdService(data){
        try {
            const res = Product_Repo.deleteById(data);
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ")
            throw error;
        }
    }
   

}

const adminservice= new adminService()

module.exports = adminservice;