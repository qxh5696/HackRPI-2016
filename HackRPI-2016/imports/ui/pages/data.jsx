import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/map.css';

export default class DataPage extends Component{

    constructor(props){
        super(props);
        this.state = {google:null};



    }

    componentWillMount() {
        $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyByh3UfwI3COcQmOBsuLiMlpAfK-pmQOLY", (script,status,jqxhr) => {
            console.log("success", window.google);
            this.setState({google:window.google});
            console.log(this.state.google);
        })
            .fail(function( jqxhr, settings, exception ) {
                $( "div.log" ).text( "Triggered ajaxError handler." );
            });

    }

    componentDidUpdate(){
        var mapOptions = {
            zoom: 11,
            center: new this.state.google.maps.LatLng(37.09024,
                -95.712891)
        };
        map = new this.state.google.maps.Map(this.refs.map,mapOptions);
        console.log(map);
    }



    render(){
        return (
            <div ref="map" id="map"></div>
        );

    }

};

