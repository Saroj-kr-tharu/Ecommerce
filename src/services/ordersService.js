const CurdService = require('./curdService')
const  {Product_Repo} = require('../repository/index')


class OrdersService extends CurdService {
    constructor(){
        super(Product_Repo)
    }

    async getProduct(page, limit, data){
        try {

            const offset = (page - 1) * limit;
            const res = await Product_Repo.getProPagation(offset,limit, data);
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (getById) ")
            throw error;
        }
    }


}

const ordersservice= new OrdersService()

module.exports = ordersservice;