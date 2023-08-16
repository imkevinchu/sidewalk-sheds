import { Location, MapConfig } from "./genericTypes";

export const locationLatLng: Location = {
  // Lower Manhattan
  lat: 40.71427,
  lng: -74.00597,
};

export const mapConfig: MapConfig = {
  avatar: "",
  maxZoom: 19,
  minZoom: 9,
  type: "vector",
  style: "mapbox://styles/mapbox/streets-v12",
  accessToken:
    "",
  title: "Sidewalk Sheds"
};
