const MAPBOX_KEY = 'pk.eyJ1IjoibHV6dmF6Z2FsIiwiYSI6ImNrazdtZ2lzMDBmYXIyeG83bHN5bmUwNTIifQ.M0e5RdSo_Exsr6x6K-2Jew'
const geojson_file = 'https://raw.githubusercontent.com/ahalota/Leaflet.CountrySelect/master/countries.geo.json';

let colors_dict = { 
    'Country': '#DE3163',
    'In': '#40E0D0',
    'Out': '#FFBF00',
    'In/Out': '#0B5345'
}


const default_coords = [0,0];
const default_zoom = 1;
