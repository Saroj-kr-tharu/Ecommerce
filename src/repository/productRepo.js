const CURD_REPO = require("./curdRepo");
const { Product } = require("../models/index");

const { Op, where } = require("sequelize");

const { AppError, HttpsStatusCodes} = require('../utlis/index')

class UserREpo extends CURD_REPO { 

    constructor(){
        super(Product)
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
            throw new AppError(
                'RepositoryError',
                'Cannot delete BY ID ',
                'Issue in deleting By ID in productRepo REPO',
                HttpsStatusCodes.INTERNAL_SERVER_ERROR

            );
        }
    }


    #createFilter(data){
        let filter = {};

        if(data.category){
            filter.category = data.category
        }

        if(data.brand){
            filter.brand = data.brand
        }

        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {
                [Op.and]:[
                    { price: { [Op.lte]: data.maxPrice } }, 
                    { price: { [Op.gte]: data.minPrice } },
                ]
            })
        }

        if(data.minPrice){
            Object.assign(filter, {price: {[Op.gte]:data.minPrice} })
        }

        if(data.rating){
            Object.assign(filter, {ratings: {[Op.gte]:data.rating} })
        }

        if(data.maxPrice){
            Object.assign(filter, {price: {[Op.lte]:data.maxPrice} })
        }

        return filter;


    }
    
    async getProPagation (offset, limit, data) { 
        
        try {
              const filter =  this.#createFilter(data)
            //   console.log('filter generated => ', filter);

              const res = await this.model.findAndCountAll({ where: filter,  offset, limit });
              return res;
        } catch (error) {
            console.log("something went wrong in Repo curd level (delete) ")
            throw new AppError(
                'RepositoryError',
                'Cannot fetched product by filter ',
                'Issue in fetching  in productRepo REPO',
                HttpsStatusCodes.INTERNAL_SERVER_ERROR

            );
        }
    }

}


const userRepo = new UserREpo();

module.exports = userRepo;
