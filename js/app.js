// Define the API endpoint
const IP_API = "https://ip-api.io/json/";

function fetchData(endpoint) {
    return fetch(endpoint)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}

function updateInfo(data) {
    document.getElementById('ip').textContent = data.ip;
    document.getElementById('country').textContent = data.country_name;
    document.getElementById('region').textContent = data.region_name;
    document.getElementById('city').textContent = data.city;
    document.getElementById('zip').textContent = data.zip_code;
    document.getElementById('lat').textContent = data.latitude;
    document.getElementById('lon').textContent = data.longitude;
    document.getElementById('timezone').textContent = data.time_zone;
    document.getElementById('isp').textContent = data.organisation;
    document.getElementById('org').textContent = data.organisation;
    document.getElementById('as').textContent = data.asn;
    document.getElementById('asname').textContent = data.as_name;
    document.getElementById('mobile').textContent = data.mobile;
    document.getElementById('proxy').textContent = data.suspiciousFactors.isProxy ? "Yes" : "No";
    document.getElementById('hosting').textContent = data.hosting;
    
    return { lat: data.latitude, lon: data.longitude };
}

function initializeMap(location) {
    const uluru = { lat: location.lat, lng: location.lon };
    const map = new google.maps.Map(document.getElementById("googlemap"), {
        zoom: 14,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

document.getElementById('searchBtn').addEventListener('click', function () {
    const search = document.getElementById('search').value;
    const searchEndpoint = IP_API + search;
    
    fetchData(searchEndpoint)
        .then((data) => {
            console.log(data);
            const location = updateInfo(data);
            initializeMap(location);
        });
});

// Initial load
function initMap() {
    fetchData(IP_API)
        .then((data) => {
            console.log(data);
            const location = updateInfo(data);
            initializeMap(location);
        });
}