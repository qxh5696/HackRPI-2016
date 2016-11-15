import { HTTP } from 'meteor/http';
/**
 * Created by qadirhaqq on 11/10/16.
 */
if(Meteor.isServer) {
    Meteor.methods({

        'fetchData'() {

            let result = HTTP.get("http://eric.clst.org/wupl/Stuff/gz_2010_us_040_00_500k.json");
            // console.log(result.data);
            return result;

        },

        'getStates'(){
            let data = JSON.parse(Assets.getText("assets/states.json"));

            console.log(data);
            return data.states;
        }

    });
}


