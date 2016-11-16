import { HTTP } from 'meteor/http';
/**
 * Created by qadirhaqq on 11/10/16.
 */
if(Meteor.isServer) {
    const TAkey = "2397bb96-6b59-422a-838f-7f093bcf89b4";
    const gMapsKey = "AIzaSyByh3UfwI3COcQmOBsuLiMlpAfK-pmQOLY";
    Meteor.methods({

        'fetchData'() {

            let result = HTTP.get("http://eric.clst.org/wupl/Stuff/gz_2010_us_040_00_500k.json");
            // console.log(result.data);
            return result;

        },

        'getStates'(){
            let data = JSON.parse(Assets.getText("assets/states.json"));


            return data.states;
        },

        'updateMap'(city,state){
            let address = city + ", " + state
            let key = gMapsKey;
            let data = HTTP.call("GET","https://maps.googleapis.com/maps/api/geocode/json",{params:{address: address, key:key}}).data;
            let location = data.results[0].geometry.location;
            let result = Meteor.call('getTripAdvisorLocId',location.lat, location.lng);
            return result;
        },

        'getTripAdvisorLocId'(lat,long){
            let parameters = {params: {key:TAkey}};
            let result = HTTP.get("http://api.tripadvisor.com/api/partner/2.0/map/" + lat.toString() + "," + long.toString() +   "/geos",
            parameters).data;

            let locID = result.data[0].location_id;
            // console.log(locID);

            let data = Meteor.call('getTripAdvisorData',locID);
            return data;
        },

        'getTripAdvisorData'(locID){
            let parameters = {params: {key:TAkey}};
            let result = HTTP.get("http://api.tripadvisor.com/api//partner/2.0/location/" + locID + "/attractions?",parameters).data;

            console.log(result.data);
            return result.data;
        }

    });
}


