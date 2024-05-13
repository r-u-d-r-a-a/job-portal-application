
const Job = require("../models/job");

const addJob = async(body) => {
    try{
    var {company, title, description, salary} = new Job(body);
        
        const newJob = new Job({
            company,
            title,
            description,
            salary
          });

        

        return await newJob.save();
    }
    catch(error){
        console.error(error);
        return error.message;
    }
}

const getJobs = async() => {
    try{
        return Job.find();
        
    } catch(error){
        return error.message;
    }
    
}


module.exports = {
   
    addJob,
    getJobs
   
}

