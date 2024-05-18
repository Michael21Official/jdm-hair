declare namespace google.maps {
    interface MapOptions {
      center: LatLng | LatLngLiteral;
      zoom: number;
    }
  
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
    }
  
    class Marker {
      constructor(opts?: MarkerOptions);
    }
  
    interface MarkerOptions {
      position: LatLng | LatLngLiteral;
      map: Map;
      title?: string;
    }
  
    interface LatLng {
      lat(): number;
      lng(): number;
    }
  
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
  
  interface Window {
    google: typeof google;
  }
  