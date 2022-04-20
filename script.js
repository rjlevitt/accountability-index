mapboxgl.accessToken = 'pk.eyJ1IjoibWRnLXRlc3QiLCJhIjoiY2tpcmxwdDhqMDNjODJzcGI5Y3J6d3pjZSJ9.xthxQKzt2_PxBYWY7gXlMA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mdg-test/cl27ysjj6000115pyhj35b7ct',
    center: [0, 0],
    zoom: 1
});


const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});
     
map.on('mousemove', 'accountability-map', (e) => {
    let accountability = e.features[0].properties.accountability
    let country = e.features[0].properties.country_name
    let observe = e.features[0].properties.obs_sum
    description = `<h4 class="tooltip">${country}</h4><h4 class="tooltip"> Accountability: ${accountability}</h4><h4 class="tooltip" >Observed Sum: ${observe}</h4>`
    popup.setLngLat(e.lngLat).setHTML(description).addTo(map);

});
     

map.on('mouseleave', 'accountability-map', () => {
    popup.remove();
});
