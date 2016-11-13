import React, {Component} from 'react';



export default class DataPage extends Component{

    componentWillMount(){
        document.title = "Map";
    }

    componentDidMount(){

            let data = Meteor.call('fetchData',function(err,res){
                if (err){
                    console.log(err);
                }
                else {
                    console.log(res);
                    data = res;
                    var canvas = d3.select("body")
                        .append("svg")
                        .attr("width", 1000)
                        .attr("height", 1000);

                    var group = canvas.selectAll("g")
                        .data(data.features)
                        .enter().append("g");

                    var projection = d3.geo.mercator().scale(1000).translate([2170, 1200]);
                    var path = d3.geo.path().projection(projection);
                    var areas = group.append("path")
                        .attr("d", path)
                        .attr("class", "area")
                        .attr("fill", "steelblue");

                    group.append("text")
                        .attr("x", function (d) {
                            return path.centroid(d)[0];
                        })
                        .attr("y", function (d) {
                            return path.centroid(d)[1];
                        })
                        .attr("text-anchor", "middle")
                        .text(function (d) {
                            console.log(d.properties.NAME);
                            return d.properties.NAME;
                    });
                }
            });

    }

    render(){
        return (
            <div className="importData"></div>
        );

    }

};