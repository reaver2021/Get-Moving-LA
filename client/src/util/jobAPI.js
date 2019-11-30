import axios from 'axios';
const job_id = process.env.REACT_APP_JOBS_API_ID;
const job_key = process.env.REACT_APP_JOBS_API_KEY;

export default {

    getNewJobs: function() {
        return axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=0d0bdb06&app_key=d4cf89b389b26fee208010b3067b1c6a&results_per_page=10&what=nurse&where=los%20angeles`)
    },

    getSavedJobs: function() {
        return axios.get("/api/jobs/");
    },

    deleteJobs: function(id){
        return axios.delete("/api/jobs" + id);
    },

    saveJobs: function(jobData){
        return axios.post("/api/jobs", jobData);
    }

};