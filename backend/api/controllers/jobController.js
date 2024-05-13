const jobServices = require('../services/jobServices');

module.exports = {

    async addJob(req, res) {

        try{
            const job = await jobServices.addJob(req.body);

            if(job.error) res.status(400).json(job);

            res.status(200).json(job);
        } catch(err){
            next(err)
        }
    },

    async getJobs(req, res){

        try{
            const job = await jobServices.getJobs();
            res.json(job);
        }
        catch(err){
            next(err)
        }
    }

}
