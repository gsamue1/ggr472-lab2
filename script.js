mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NhbXVlbC11b2Z0IiwiYSI6ImNsY3lieDA3MjJjNnAzcGs2NmxoMndpeGIifQ.PKKRKM7-HRYK7TuPgztVzg'; //default public map token from Mapbox account 

const map = new mapboxgl.Map({
    container: 'map', // div container ID for map
    style: 'mapbox://styles/gsamuel-uoft/cle4l4pr5001t01ljheblcl08', // Link to mapbox style URL
    center: [-79.390, 43.663], // starting position [longitude, latitude]
    zoom: 11.29, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
    map.addSource('odr', {
        'type': 'vector',
        'url': 'mapbox://gsamuel-uoft.14j01kfq'
    });

    map.addLayer({
        'id': 'outdoor-rinks-to', // unique id develoepd for layer
        'type': 'circle',
        'source': 'odr', //source id that matches addSource function
        'paint': {
            'circle-color': '#627BC1'
        },
        'source-layer': 'Outdoor_Ice_Rinks_-_4326-dz0kt0' //Layer ID from Mapbox page
    });

    map.addSource('idr', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/gsamue1/ggr472-lab2/main/indoor-ice-rinks-data.geojson?token=GHSAT0AAAAAAB6HWTCOUVP4CZSV53VQQTIIY7PV57Q' //GitHub repository link
    });

    map.addLayer({
        'id': 'indoor-rinks-to', // unique id develoepd for layer
        'type': 'circle',
        'source': 'idr', //source id that matches addSource function
        'paint': {
            'circle-color': 'red',
        },
    });
})
