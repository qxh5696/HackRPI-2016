import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/map.css';
import EventForm from '../components/EventForm.jsx';


const latDefault = 37.09024;
const longDefault = -95.712891;
export default class DataPage extends Component{

    constructor(props){
        super(props);
        this.state = {google:null, lat:latDefault,long:longDefault, visualizedData:null };
        this.map;


    }

    componentWillMount() {
        $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyByh3UfwI3COcQmOBsuLiMlpAfK-pmQOLY", (script,status,jqxhr) => {
            this.setState({google:window.google});
        })
        .fail(function( jqxhr, settings, exception ) {
            $( "div.log" ).text( "Triggered ajaxError handler." );
        });

    }



    componentDidUpdate() {

        if (this.state.visualizedData) {
            this.setMarkers(this.map, this.state.visualizedData);
            this.setCircleAssoc(this.map, this.state.visualizedData);
            let panToPoint = new this.state.google.maps.LatLng(this.state.lat,
                this.state.long);
            this.map.panTo(panToPoint);




        }
        else {
            var mapOptions = {
                zoom: 11,
                center: new this.state.google.maps.LatLng(this.state.lat,
                    this.state.long)
            };

            this.map = new this.state.google.maps.Map(this.refs.map, mapOptions);

        }

    }

    setMarkers(map, dArray) {
        for (var i = 0; i < dArray.length; i++) {
            var location = dArray[i];
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng( parseInt(location.latitude) , parseInt(location.longitude)),
                draggable: true,
                map: map,
                title: location.name,
                visible: false
            });
            this.setCircle(map, location);
        }
    }

    setCircle(map, location) {
        var draw_circle = new google.maps.Circle({
            center: new google.maps.LatLng( parseInt(location.latitude), parseInt(location.longitude)),
            radius: location.rating * 100,
            strokeColor: "#000",
            strokeOpacity: 0.4,
            strokeWeight: 1,
            fillColor: "red",
            fillColor0: "red",
            map: map
        });

        this.makeClickable(draw_circle, location.name);
        this.setMouseOverEvent(draw_circle, location.name);
    }


    setCircleAssoc(map, json) {
        for( var key in json){
            var draw_circle = new google.maps.Circle({
                center: new google.maps.LatLng(parseFloat(json[key].latitude), parseFloat(json[key].longitude)),
                radius: json[key].rating * 100,
                strokeColor: "#000",
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: "red",
                fillColor0: "red",
                fillColor1: "#000",
                fillOpacity: 0.2 * json[key].rating,
                map: map
            });

            this.makeClickable(draw_circle, json[key].name + "-Rating: " + json[key].rating);
            this.setMouseOverEvent(draw_circle, json[key].name + "-Rating: " + json[key].rating);
        }

    }



   makeClickable(circle, name) {
        var infoWin = new google.maps.InfoWindow({});
        google.maps.event.addListener(circle, "click", function () {
            infoWin.setContent(name);
            infoWin.setPosition(circle.getCenter());
            infoWin.open(map);
        });
    }

    setMouseOverEvent(draw_circle, name) {
        var infoWin = new google.maps.InfoWindow({});
        google.maps.event.addListener(draw_circle, 'mouseover', function (e) {
            infoWin.setContent(name);
            infoWin.setPosition(draw_circle.getCenter());
            infoWin.open(map);
            this.setOptions({
                fillColor: "#000"
            });
        });
        google.maps.event.addListener(draw_circle, 'mouseout', function (e) {
            infoWin.close();
            this.setOptions({
                fillColor: this.fillColor0
            });
        });
    }

    setup(json){
        this.setState({lat:json[0].latitude,long:json[0].longitude,visualizedData:json});

    }

    handleSubmit(city, state){

        // var func = this.setup.bind(this);
        Meteor.call('updateMap',city,state,(err,res) =>{

            if(!err){
                this.setup(res);
            }
            else{
                console.log(err);
            }
        });

    }





    render(){
        return (
            <div>
                <EventForm onSubmit={this.handleSubmit.bind(this)}/>
                <div ref="map" id="map"></div>
            </div>
        );

    }

};

