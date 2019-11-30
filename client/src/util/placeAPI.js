import axios from 'axios';

export default {

    getNewJobs: function() {
        return axios.get(`https://api.foursquare.com/v2/venues/search?
        near=Los Angeles, CA&
        client_id=RBRMSTQJ1S4JPA4CEAVIHIXDN4LXK4YBS4E5ATZ2FKLV1AXL&
        client_secret=UQUNWNKZNNNINHHKKBCVWZOVLJW2BJXBTNMJ0THRBQXVEJWY&
        query="Sushi"`);
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