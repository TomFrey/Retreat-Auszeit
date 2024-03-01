// Initialize and add the map
let map;

async function initMap() {
  // The location of Retreat-Auszeit
  const position = { lat: 46.80722791563473, lng: 9.312256329089417 }; 
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Retreat-Auszeit
  map = new Map(document.getElementById("map"), {
    zoom: 9,
    center: position,
    mapId: "6432480babd2c364",
  });

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: position,
    title: 'Retreat-Auszeit',
  });
}


export {
    initMap
};
