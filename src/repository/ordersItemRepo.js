const CURD_REPO = require("./curdRepo");
const { Order } = require("../models/index");


class OrderItemsRepo extends CURD_REPO { 

    constructor(){
        super(Order)
    }

    async deleteById (id) { 
        try {
              const res = await this.model.destroy({
                    where: {
                    id
                    },
                });
            return res;
        } catch (error) {
            console.log("something went wrong in Repo curd level (delete) ")
            throw error;
        }
    }


    

}


const orderItemsRepo = new OrderItemsRepo();

module.exports = orderItemsRepo;
