function geocode() {
    var location = "22 Main st Boston MA";
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: location,
            key: 'AIzaSyCafiyARPG-bfu_qLRVSvl3Dqp9VORXtsQ'
        }
    })
        .then(function (response) {
            // Log full response
            console.log(response);

            //Formatted Adress
            var formattedAddress = response.data.results[0].formatted_address;
            document.getElementById('map').innerHTML = formattedAddress, addressComponents;

            //Address Components
            var addressComponents = response.data.results[0].address_components;
            for(var i = 0; i < addressComponents.length; i++) {
                addressComponents =+ addressComponents[i].short_name;
            }
            document.getElementById('map2').innerHTML = addressComponents;

        })
        .catch(function (error) {
            console.log(error);
        })
}

geocode();


// Mapa

// var y = document.getElementById('map');
// var mapLatitude;
// var mapLongitude;
// var myLatLng;
//
// function getMapLocation() {
//     console.log("getMapLocation");
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showMapPosition);
//     } else {
//         y.innerHTML = "La geolocalizacion no esta soportada por este navegador"
//     }
// }
//
// function showMapPosition(position) {
//     console.log('showMapPosition');
//     mapLatitude = position.coords.latitude;
//     mapLongitude = position.coords.longitude;
//     myLatLng = new google.maps.LatLng(mapLatitude, mapLongitude);
//     getMap();
// }
//
// var map;
// function getMap() {
//     console.log('getMap');
//     var mapOptions = {
//         zoom: 15,
//         center: new google.maps.LatLng(mapLatitude, mapLongitude)
//     };
//     map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//     var marker = new google.maps.Marker({
//        position: myLatLng, map: map, title: "Estas aqui"
//     });
// }
//
// getMapLocation();



//Direcciones

var directionsDisyplay;
var directionsMap;
var z = document.getElementById("map");
var start;
var end;

function getDirectionsLocation() {
    console.log("getDirectionsLocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showDirectionsPosition);
    } else {
        z.innerHTML = "La geolocalizacion no esta soportada por este navegador"
    }
}

function showDirectionsPosition(position) {
    console.log('showMapPosition');
    directionsLatitude = position.coords.latitude;
    directionsLongitude = position.coords.longitude;
    myDirectionsLatLng = new google.maps.LatLng(directionsLatitude, directionsLongitude);
    //myLastD
    getDirections();
}

function getDirections() {
    console.log('getDirections');
    directionsDisyplay = new google.maps.DirectionsRenderer();
    start = new google.maps.LatLng(directionsLatitude, directionsLongitude);
    var mapOptions = {
        zoom: 12,
        center: start,
        title: "estas aca"
    };
    directionsMap = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisyplay.setMap(directionsMap);
    calcRoute();
}

function calcRoute() {
    console.log('calcRoute');
    var directionsService = new google.maps.DirectionsService();
    start = myDirectionsLatLng;
    end = "EAFIT";
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisyplay.setDirections(result);
        }
    });
}

getDirectionsLocation();

