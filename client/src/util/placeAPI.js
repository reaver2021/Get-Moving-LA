import axios from 'axios';

export default {

    getNewJobs: function() {
        return axios.get(`https://api.foursquare.com/v2/venues/search?ll=40.7,-74& client_id=RBRMSTQJ1S4JPA4CEAVIHIXDN4LXK4YBS4E5ATZ2FKLV1AXL& client_secret=UQUNWNKZNNNINHHKKBCVWZOVLJW2BJXBTNMJ0THRBQXVEJWY& query=sushi&v=20191101`);
    },

    getSavedJobs: function() {
        return axios.get("/api/places/");
    },

    deleteJobs: function(id){
        return axios.delete("/api/places" + id);
    },

    saveJobs: function(placeData){
        return axios.post("/api/places", placeData);
    }
};