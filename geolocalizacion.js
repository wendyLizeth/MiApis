let map;
let position = { lat: 21.813878, lng: -102.769319 };
async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    input = document.getElementById("places");
    autocomplete = new google.maps.places.Autocomplete(input);


    map = new Map(document.getElementById("map"), {
        center: position,
        zoom: 15,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: 'Marcador'
    });


}

initMap();