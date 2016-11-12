import { Meteor } from 'meteor/meteor';

/**
 * Created by qadirhaqq on 11/10/16.
 */
Meteor.methods({
    'importData'() {
    //https://candidate.hubteam.com/candidateTest/v1/partners?userKey=67dedee4e0cccfc4be883982fbad
    //data/suicide-squad.json
    //https://jsonplaceholder.typicode.com/posts
    //http://api.tripadvisor.com/api/partner/2.0/location/89575?key=2397bb96-6b59-422a-838f-7f093bcf89b4
    /*
     "http://api.tripadvisor.com/api//partner/2.0/location/89575,233835,192416/hotels?key=" +
     "2397bb96-6b59-422a-838f-7f093bcf89b4"
     */
    d3.json("http://api.tripadvisor.com/api//partner/2.0/location/60745/attractions?key=" +
        "2397bb96-6b59-422a-838f-7f093bcf89b4", function (error, json){

        //json = json["Object"];

        //saveText(JSON.stringify(json), "data/tripAdvisorLocation.json");

        if(error){
            return console.warn(error);
        }
        // console.log(json);

        json = json.data;
        var canvas = d3.select(".importData")
            .append("svg")
            .attr("width", json.length * 100)
            .attr("height",json.length * 100);

        canvas.selectAll("rect")
            .data(json)
            .enter()
            .append("rect")
            .attr("width", function (d){
                return d.rating * 100;
            })
            .attr("height", 50)
            .attr("y", function (d, i) {//remember "i" is the index of the array
                // console.log(d);
                return i * 80;
            })
            .attr("fill","red");

        canvas.selectAll("text")
            .data(json)
            .enter()
            .append("text")
            .attr("fill","#ffffff")
            .attr("y", function (d,i){
                return i * 80 + 25;
            })
            .attr("x",5)
            .text(function (d){
                return d.name + ", rating: " + d.rating;
            });
    });
}



});





