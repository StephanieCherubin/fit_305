function initMap() {
  var uluru = {lat, lng};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}




  // ///////////////////////////  First Google map API Above
  // ///////////////////////////  First Google map API Above
  // ///////////////////////////  First Google map API Above
  // ///////////////////////////  First Google map API Above
  // ///////////////////////////  First Google map API Above
  // ///////////////////////////  First Google map API Above






  // ////////////////// Geo location map below
  // ////////////////// Geo location map below
  // ////////////////// Geo location map below
  // ////////////////// Geo location map below

  //// Note: This example requires that you consent to location sharing when
  //// prompted by your browser. If you see the error "The Geolocation service
  //// failed.", it means you probably did not give permission for the browser to
  //// locate you.


  //
  // var map, infoWindow;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: 25.363, lng: -131.044},
  //     zoom: 10
  //     // 25.795451, -80.223366
  //   });
  //   infoWindow = new google.maps.InfoWindow;
  //
  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent('Here I am');
  //       infoWindow.open(map);
  //       map.setCenter(pos);
  //     }, function() {
  //       handleLocationError(true, infoWindow, map.getCenter());
  //     });
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }
  //
  // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //                         'Error: The Geolocation service failed.' :
  //                         'Error: Your browser doesn\'t support geolocation.');
  //   infoWindow.open(map);
  // }
