class CurdService { 
    constructor(repo){
        this.repo = repo;
    }

    async createService(data){
        try {
            const res = await this.repo.create(data);
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ")
            throw error;
        }
    }

    async deleteService(data){
        try {
            const res = await this.repo.delete(data);
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (create) ")
            throw error;
        }
    }

    async updateService(data,id){
        try {
            const res = await this.repo.updateById(data, id );
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (update) ")
            throw error;
        }
    }

    

    async getByIdService(data){
        try {
            const res = await this.repo.getById(data);
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (getById) ")
            throw error;
        }
    }
    
    async getAll(){
        try {
            const res = await this.repo.getAll();
            return res; 

        } catch (error) {
            console.log("something went wrong in service curd level  (getAll) ")
            throw error;
        }
    }

}


module.exports = CurdService;