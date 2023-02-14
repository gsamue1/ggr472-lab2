mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NhbXVlbC11b2Z0IiwiYSI6ImNsY3lieDA3MjJjNnAzcGs2NmxoMndpeGIifQ.PKKRKM7-HRYK7TuPgztVzg'; //default public map token from Mapbox account 

const map = new mapboxgl.Map({
    container: 'map', // div container ID for map
    style: 'mapbox://styles/gsamuel-uoft/cle4l4pr5001t01ljheblcl08', // Link to mapbox style URL
    center: [-79.390, 43.663], // starting position [longitude, latitude]
    zoom: 11.29, // starting zoom
});




// .ready(function() {
//     $(".dropdown-toggle").dropdown();
// });



// map.on('load', () => {
//     /*ADDING A SOURCE FROM A GEOJSON FILE*/
//     map.addSource('uoft', {
//         type: 'geojson',
//         data: { 
//             "type": "FeatureCollection",
//             "features": [
//                 {
//                     "type": "Feature",
//                     "properties": {
//                         "name": "Sidney Smith Hall"
//                     },
//                     "geometry": {
//                         "coordinates": [
//                             -79.39865237301687,
//                             43.662343395037766
//                         ],
//                         "type": "Point"
//                     }
//             }
//         ]}
//     });

//     map.addLayer({
//         'id': 'uoft-buildings',
//         'type': 'circle',
//         'source': 'uoft',
//         'paint': {
//             'circle-radius': 6,
//             'circle-color': '#B42222'
//         }
//     });


//     /*ADDING A SOURCE FROM A MAPBOX TILESET - DATA YOU UPLOADED TO MAPBOX STUDIO*/
//       map.addSource('toronto-census-tracts', { //Your source ID
//         'type': 'vector',
//         'url': 'mapbox://gsamuel-uoft.1h59jluq' //Your tileset link from mapbox
//     });

//     map.addLayer({
//         'id': 'toronto-ct',
//         'type': 'fill',
//         'source': 'toronto-census-tracts', //must match source ID from addSource method
//         'paint': {
//             'fill-color': '#888888',
//             'fill-opacity': 0.4,
//             'fill-outline-color': 'black'
//         },
//         'source-layer': 'torontoct-d24qfa' //name of layer. Get this from mapbox tileset page
//     },
//          'uoft-buildings' //Drawing order - place below points
//     );

// })
