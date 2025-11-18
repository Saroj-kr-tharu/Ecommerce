const CurdService = require('./curdService')
const  {Orders_Repo} = require('../repository/index')


class OrdersService extends CurdService {
    constructor(){
        super(Orders_Repo)
    }


    async getAllOrders(offset,limit){
        try {

        const res = await Orders_Repo.getAllOrders(offset,limit);
        return res;

        } catch (error) {
            console.log("something went wrong in service curd level  (getById) ")
            throw error;
        }
    }
    


}

const ordersservice= new OrdersService()

module.exports = ordersservice;