/**
 * Created by UC214475 on 11/14/2016.
 */
$("#eventForm").submit(function(){
   var city = $("#city").val().trim();
    var state = $("#state").val().trim();
    var address = city +" ,"+state;
    var key = "AIzaSyByh3UfwI3COcQmOBsuLiMlpAfK-pmQOLY";
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json",
        data: {address : address, key: key},
        success: function(data){
            console.log(data.results[0]);
        }
    });
    // var panPoint = new google.maps.LatLng(document.getElementById("lat").value, document.getElementById("lng").value);
    // map.panTo(panPoint)
});