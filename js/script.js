var openClose = document.querySelector(".btn-hotels");
var popup = document.querySelector(".booking-form");

openClose.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("booking-form-show");
});


function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(34.8390006,-111.840093)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/map-logo.png";
  var myLatLng = new google.maps.LatLng(34.877,-111.762);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);