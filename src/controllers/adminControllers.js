
const {SucessCode,ServerErrosCodes} = require('../utlis/errors_codes')
const {adminService, orderService} = require('../services/index')

class AdminController { 

    async addProduct(req,res) {
        try {
            
    
            const data = req?.body;
            console.log('data => ', data)
            const response = await adminService.createService(data);
            
            return res.status(SucessCode.CREATED).json({
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
    
    async editProduct(req,res) {
        try {
            
            
            const data = req?.body;
            const id = req?.query?.id;
            const response = await adminService.updateService(data, id);
            
            return res.status(SucessCode.CREATED).json({
                message: "Successfully to update Products",
                success: true,
                data: response, 
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (edit products) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to update products ",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }

     async deleteProduct(req,res) {
        try {
            
            
            const id = req?.query?.id;
            const response = await adminService.deleteByIdService(id);
            
            return res.status(SucessCode.OK).json({
                message: "Successfully delete product",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (delete product) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }


    async getAllOrders(req,res) {
        try {
            const {page,limit} = req?.query;
            const response = await adminService.getAllOrders(page,parseInt(limit));
            
            return res.status(SucessCode.OK).json({
                message: "Successfully fetched all orders",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (getallOrders) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }


    async editOrders(req,res) {
        try {
            const {orderId} = req?.query;
            const data = req?.body; 

            console.log(data)

            const response = await orderService.updateService(data, orderId);
            
            return res.status(SucessCode.OK).json({
                message: "Successfully updated orders",
                success: true,
                data: response,
                err: {},
            });

        } catch (error) {
            console.log("something went wrong in controller  level  (update orders) ")
            return res.status(ServerErrosCodes.NOT_IMPLEMENTED).json({
                message: "Failed to Signup",
                success: false,
                data: {},
                err: error.message || error,
            });
        }
    }

}



const adminController = new AdminController();

module.exports = adminController;