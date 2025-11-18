const CURD_REPO = require("./curdRepo");
const { Order, User, Product, OrderItem } = require("../models/index");


class OrderRepo extends CURD_REPO { 

    constructor(){
        super(Order)
    }

    async getAllOrders (offset, limit) { 
        try {
              const orders = await Order.findAll({
                include: [
                    {
                    model: User,
                    as: 'user', 
                    attributes: ['id', 'username', 'email']
                    },
                    {
                    model: OrderItem,
                    include: [
                        {
                        model: Product,
                        attributes: ['id', 'name', 'price', 'stock']
                        }
                    ]
                    }
                ], 

                offset: parseInt(offset) || 0,
                limit: parseInt(limit) || 10,
                order: [['createdAt', 'DESC']]

                });

                return orders;

        } catch (error) {
            console.log("something went wrong in Repo curd level (delete) ")
            throw error;
        }
    }





    

}


const ordersRepo = new OrderRepo();

module.exports = ordersRepo;
