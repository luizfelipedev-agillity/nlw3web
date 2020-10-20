import mapMarkerImg from '../imagens/logo_map.svg';
import Leaflet from 'leaflet';

const mapIcon =Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize:[58,48],
    iconAnchor: [29,68],
    popupAnchor:[170,-14],
  })

  export default mapIcon;