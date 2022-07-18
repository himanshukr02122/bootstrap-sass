
  require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {
  
    esriConfig.apiKey = "AAPK704f2b1135944cddb912864d99840e68CG4le3uwjInwYOn4UzpBD1I5-TGwge-FDnhDrzmU694-yqPQhoeO7BMaarRFVOD3";

    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });
    
    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 11, // Zoom level
      container: "viewDiv" // Div element
    });
  });