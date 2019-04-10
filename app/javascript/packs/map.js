mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnlyeWRlciIsImEiOiJjanViMjRhMGwwODVyNDRsNDk1NXYwb3VzIn0.NAffONrBXEBDGVoqUn6MuQ';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-12.9352267, 9.118463],
  zoom: 9
});

var map = new mapboxgl.Map({
  container: 'map-large', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-12.9352267, 9.118463],
  zoom: 9
});

// map.on('load', function() {
//   map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
//     if (error) throw error;
//     map.addImage('cat', image);
//     map.addLayer({
//       "id": "points",
//       "type": "symbol",
//       "source": {
//         "type": "geojson",
//         "data": {
//           "type": "FeatureCollection",
//           "features": [{
//             "type": "Feature",
//             "geometry": {
//               "type": "Point",
//               "coordinates": [-12.9352267, 9.118463]
//             }
//           }]
//         }
//       },
//       "layout": {
//         "icon-image": "cat",
//         "icon-size": 0.1
//       }
//     });
//   });
// });
