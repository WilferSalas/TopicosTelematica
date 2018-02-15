var marcador_tiempo_real, map;
//google.maps.event.addDomListener(window, 'load', initMap);
function initMap() {
  // map options
  var options = {
    zoom: 15,
    //center: {lat: 42.3601, lng: -71.0586}
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // new map
  map = new google.maps.Map(document.getElementById('map-canvas'), options);
  navigator.geolocation.getCurrentPosition(function (posicion) {
    var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);
    var marker = new google.maps.Marker({
      map: map,
      position: geolocalizacion,
      visible: true
    });
    marcador_tiempo_real = new google.maps.Marker({
      map: map,
      position: geolocalizacion,
      visible: true
    });
    map.setCenter(geolocalizacion);
    navigator.geolocation.watchPosition(actualizarPosicion, function (error){console.error(error);}, {
      maximumAge: 0
    });
  }, function(error){
    console.log(error);
  });
  function actualizarPosicion(posicion) {
    var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);
    marcador_tiempo_real.setPosition(geolocalizacion);
    mapa.setCenter(geolocalizacion);
    console.log(geolocalizacion);
  }
}

