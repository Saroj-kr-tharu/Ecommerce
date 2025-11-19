
const {custumerService} = require('../services/index')
const {SucessCode,ServerErrosCodes} = require('../utlis/errors_codes')

class CustumerControllers { 

    async getProduct(req,res) {
        try {

            const {page,limit,category,minPrice,maxPrice,rating,brand} = req?.query;
           
            const data = {
                category: category || null,
                minPrice: minPrice ? parseInt(minPrice) : null,
                maxPrice: maxPrice ? parseInt(maxPrice) : null,
                rating: rating ? parseFloat(rating) : null,
                brand: brand || null
            };


            const response = await custumerService.getProduct(page,parseInt(limit),data);
            
            return res.status(SucessCode.OK).json({
                message: "Successfully to add products",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (add) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }


     async addOrders(req,res) {
        try {
            
            
                
            const {userId, shippingAddress, billingAddress, paymentMethod, orderItems } = req?.body;


            if ( !shippingAddress || !billingAddress || !paymentMethod || !orderItems || !userId){
                throw new  error(" required is not mention  ")
            }

            const response = await custumerService.addOrders({userId, shippingAddress, billingAddress, paymentMethod, orderItems});
            
            return res.status(SucessCode.OK).json({
                message: "Successfully to add products",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (addordres) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to add Orders",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }
    
      async getOrdersByUserId(req,res) {
        try {
            
            const {page, limit, id } = req?.query;

            if ( !id){
                throw new  error(" required is not mention  ")
            }

            const response = await custumerService.getOrders(page,limit,id);
            
            return res.status(SucessCode.OK).json({
                message: "Successfully fetched all Orders ",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (getOrdersByUserId) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to fetched Orders",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }

}



const custumerControllers = new CustumerControllers();

module.exports = custumerControllers;