/**
 * Created by qadirhaqq on 11/13/16.
 */


function initialize() {

    /*d3.json("http://api.tripadvisor.com/api//partner/2.0/location/48739/attractions?key=" +
        "2397bb96-6b59-422a-838f-7f093bcf89b4", function (error, json) {

        console.log(json);
        json = json.data;

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(json[0].latitude, json[0].longitude)
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);



        setMarkers(map, json);
        setCircleAssoc(map, json);
    });*/
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(37.09024,
         -95.712891)
    };
    map = new google.maps.Map(document.getElementById('map'),mapOptions);

}



function setMarkers(map, dArray) {
    for (var i = 0; i < dArray.length; i++) {
        var location = dArray[i];
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng( parseInt(location.latitude) , parseInt(location.longitude)),
            draggable: true,
            map: map,
            title: location.name,
            visible: false
        });
        setCircle(map, location);
    }
}

function setCircle(map, location) {
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
    //overlays.push(draw_circle);
    makeClickable(draw_circle, location.name);
    setMouseOverEvent(draw_circle, location.name);
}


function setCircleAssoc(map, json) {
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
//                        fillOpacity0: 0.3,
//                        fillOpacity1: 0.3,
            map: map
        });
        //overlays.push(draw_circle);
        makeClickable(draw_circle, json[key].name + "-Rating: " + json[key].rating);
        setMouseOverEvent(draw_circle, json[key].name + "-Rating: " + json[key].rating);
    }

}



function makeClickable(circle, name) {
    var infoWin = new google.maps.InfoWindow({});
    google.maps.event.addListener(circle, "click", function () {
        infoWin.setContent(name);
        infoWin.setPosition(circle.getCenter());
        infoWin.open(map);
    });
}

function setMouseOverEvent(draw_circle, name) {
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
