mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NhbXVlbC11b2Z0IiwiYSI6ImNsY3lieDA3MjJjNnAzcGs2NmxoMndpeGIifQ.PKKRKM7-HRYK7TuPgztVzg'; //default public map token from Mapbox account 

const map = new mapboxgl.Map({
    container: 'map', // div container ID for map
    style: 'mapbox://styles/gsamuel-uoft/cle4l4pr5001t01ljheblcl08', // Link to mapbox style URL
    center: [-79.390, 43.663], // starting position [longitude, latitude]
    zoom: 11.29, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
    // Add Map Source for Vector Tileset of Outdoor Ice Rinks (ODRs) in Toronto 
    // Data Sourced from City of Toronto Open Data and uploaded to personal mapbox to build vector file
    map.addSource('odr', {
        'type': 'vector',
        'url': 'mapbox://gsamuel-uoft.14j01kfq' //
    });

    // Adding Outdoor Rink Layer to existing basemap with simple styling
    map.addLayer({
        'id': 'outdoor-rinks-to', // unique id develoepd for layer
        'type': 'circle',
        'source': 'odr', //source id that matches addSource function
        'paint': {
            'circle-color': '#627BC1' // colour for points
        },
        'source-layer': 'Outdoor_Ice_Rinks_-_4326-dz0kt0' //Layer ID from Mapbox page
    });

    // Adding Source for GeoJSON of Indoor Ice Rinks (IDRs) in Toronto
    // Data Sourced from City of Toronto Open Data -- downloaded directly as geoJSON
    map.addSource('idr', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/gsamue1/ggr472-lab2/main/Outdoor%20Ice%20Rinks%20-%204326.geojson?token=GHSAT0AAAAAAB6HWTCPDWWFE4QGL53YIUFAY7YJWOQ' //GitHub repository link
    });

    //Adding Indoor Rink GeoJSON geometry to existing basemap with simple styling
    map.addLayer({
        'id': 'indoor-rinks-to', // unique id develoepd for layer
        'type': 'circle',
        'source': 'idr', //source id that matches addSource function
        'paint': {
            'circle-radius': 12,
            'circle-color': 'red', //point colour
        },
    });
})
