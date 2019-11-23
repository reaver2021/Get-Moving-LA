import axios from 'axios';
const place_id = process.env.PLACES_API_ID;
const place_key = process.env.PLACES_API_KEY;

export default {

    getNewJobs: function() {
        return axios.get(`http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=${place_id}&app_key=
        ${place_key}&results_per_page=20&what=""&where=losangeles1&content-type=application/json`);
    },

    getSavedJobs: function() {
        return axios.get("/api/jobs/");
    },

    deleteJobs: function(id){
        return axions.delete("/api/jobs" + id);
    },

    saveJobs: function(jobData){
        return axios.post("/api/jobs", jobData);
    }
};