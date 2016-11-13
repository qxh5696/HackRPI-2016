import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class DataPage extends Component{

    componentWillMount(){
        document.title = "Map";

    }

    componentDidMount() {
        // this.loadScript();

        // Meteor.call('fetchData', function (err, json) {
        // var script2 = document.createElement('script');
        // script2.type = 'text/javascript';
        // script2.src = "../lib/startup/mapInitializer.js";
        // console.log(document.head);
        // document.head.appendChild(script2);
        // console.log(document.head);

        $.getScript( "/mapInitializer.js" )
            .done(function( script, textStatus ) {
                console.log( "success" );
            })
            .fail(function( jqxhr, settings, exception ) {
                console.log("failed");
            });
        var script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.defer = true;
        // script1.async = true;
        script1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyByh3UfwI3COcQmOBsuLiMlpAfK-pmQOLY&callback=initialize';
        document.head.appendChild(script1);
        // this.loadScript();
    }


    loadScript()
    {
        var script2 = document.createElement('script');
        script2.src = "../lib/startup/mapInitializer.js";
        console.log(document.getElementsByTagName("head"));
        document.getElementsByTagName("head").appendChild(script2);
        console.log(document.getElementByTagName("head"));
        var script1 = document.createElement('script');
        // script.type = 'text/javascript';
        script1.defer = true;
        script1.async = true;
        script1.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyByh3UfwI3COcQmOBsuLiMlpAfK-pmQOLY&callback=initialize';
        document.head.append(script1);

    }

    render(){
        return (
            <div id="map"></div>
        );

    }

};