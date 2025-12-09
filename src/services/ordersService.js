const CurdService = require('./curdService')
const  {Orders_Repo} = require('../repository/index')
const {  ServiceError} = require('../utlis/index')

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
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw new ServiceError()
        }
    }


    async getAllOrderWithoutFilterORderService(){
        try {

        const res = await Orders_Repo.getAllOrdersWithoutFilter();
        return res;

        } catch (error) {
            console.log("something went wrong in service curd level  (getById) ")
            if (error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }

            throw new ServiceError()
        }
    }
    


}

const ordersservice= new OrdersService()

module.exports = ordersservice;