
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
            
            // shipping address = {
                //     "street": "123 Main St",
                //     "city": "Kathmandu",
                //     "zip": "44600",
                //     "country": "Nepal"
                // },

            //   "billingAddress": {
                    //     "street": "123 Main St",
                    //     "city": "Kathmandu",
                    //     "zip": "44600",
                    //     "country": "Nepal"
                    //   },    
            //    order Items =          [
            //     {
            //     "productId": 5,
            //     "quantity": 2,
            //     "productPrice": 100
            //     },
            //     {
            //     "productId": 7,
            //     "quantity": 1,
            //     "productPrice": 200
            //     }
            // ]
                
            const {shippingAddress, billingAddress, paymentMethod, orderItems } = req?.body;


            if ( !shippingAddress || !billingAddress || !paymentMethod || !orderItems ){
                throw new  error("missing something ")
            }

            const response = await custumerService.addOrders({shippingAddress, billingAddress, paymentMethod, orderItems});
            
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
    
    

}



const custumerControllers = new CustumerControllers();

module.exports = custumerControllers;