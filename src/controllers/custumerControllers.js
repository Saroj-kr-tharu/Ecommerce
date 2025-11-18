
const {custumerService} = require('../services/index')
const {SucessCode,ServerErrosCodes} = require('../utlis/errors_codes')

class CustumerControllers { 

    async getProduct(req,res) {
        try {
            // GET /products?page=1&limit=10&category=Electronics&minPrice=100&maxPrice=500&rating=4

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
    
    

}



const custumerControllers = new CustumerControllers();

module.exports = custumerControllers;