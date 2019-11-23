import axios from 'axios';
const place_id = process.env.PLACES_API_ID;
const place_key = process.env.PLACES_API_KEY;

export default {

    getNewJobs: function() {
        return axios.get(`https://api.foursquare.com/v2/venues/search?
        near=Los Angeles, CA&
        client_id=${place_id}&
        client_secret=${place_key}&
        query=""`);
    },

    getSavedJobs: function() {
        return axios.get("/api/places/");
    },

    deleteJobs: function(id){
        return axions.delete("/api/places" + id);
    },

    saveJobs: function(placeData){
        return axios.post("/api/places", placeData);
    }
};