/* eslint-disable */
export const displayMap = locations => {
    mapboxgl.accessToken =
        'pk.eyJ1IjoiYXBva2FsaXBzMjgiLCJhIjoiY2s4bG1iOGV5MDNoMDNubjg0dzltcGg5NCJ9.1K-90VQN3PQUspttd2jviA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/apokalips28/ck8lmjm670t6s1iod8xaopwen',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 4,
        // interactive:false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Add marker
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        })
            .setLngLat(loc.coordinates)
            .addTo(map);
        new mapboxgl.Popup({
            offset: 30
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
            .addTo(map);
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 100,
            left: 100,
            right: 100
        }
    });
};
