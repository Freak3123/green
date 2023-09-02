import React from 'react';

function MapMarker(){
    return(<div><div id="map"></div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly"
      defer
    ></script></div>)
}

export default MapMarker;