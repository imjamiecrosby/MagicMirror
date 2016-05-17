

			

function updateMap()  {
  // the following creates a Google Map with zoom level 10 and the LatLong coordinates
  // stated below
  var latlng = new google.maps.LatLng(37.7924449, -122.341294);
  var myOptions = {
    zoom: 11,
    center: latlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    overviewMapControl: false,
    hideInfoWindows: true,
  };

  var map = new google.maps.Map(document.getElementById("google_map"), myOptions);
  updateTrafficOnMap(map, null, 1);

  var styles = [{
	    stylers: [{
	        hue: "#00ffe6"
	    }, {
	        saturation: -20
	    },  {
	        invert_lightness: 'true'
	    },  ]
	}, {
	    featureType: "water",
	    stylers: [{
	        saturation: -100
	    },  {
	    	hue: "#0D4F8B"
	    },  ]
	}, {
	    featureType: "road",
	    elementType: "geometry",
	    stylers: [{
	        lightness: 100
	    }, {
	        visibility: "simplified"
	    }]
	}, {
	    featureType: "road",
	    elementType: "labels",
	    stylers: [{
	        visibility: "off"
	    }]
	}, {
	    elementType: "labels",
	    stylers: [{
	        visibility: "off"
	    }]
	}];

	map.setOptions({styles: styles});
}

function updateTrafficOnMap(map, trafficLayer, on)
{
  if(on == 0) {
    trafficLayer.setMap(null);
    setTimeout(function() { updateTrafficOnMap(map, null, 1) }, 1) 
  }
  if(on == 1) {
    var trafficLayer2 = new google.maps.TrafficLayer();
    trafficLayer2.setMap(map);
    // after 300ms (or 5 minutes) update the traffic map
    setTimeout(function() { updateTrafficOnMap(map, trafficLayer2, 0)}, 300000)
     console.log("THIS UPDATED");

  }
}

