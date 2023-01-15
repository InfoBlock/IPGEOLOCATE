/*var endpoint = 'http://ip-api.com/json';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        document.getElementById('ip').innerHTML = response.query;
        document.getElementById('country').innerHTML = response.country;
        document.getElementById('region').innerHTML = response.regionName;
        document.getElementById('city').innerHTML = response.city;
        document.getElementById('zip').innerHTML = response.zip;
        document.getElementById('lat').innerHTML = response.lat;
        document.getElementById('lon').innerHTML = response.lon;
        document.getElementById('timezone').innerHTML = response.timezone;
        document.getElementById('isp').innerHTML = response.isp;
        document.getElementById('org').innerHTML = response.org;
        document.getElementById('as').innerHTML = response.as;
        document.getElementById('asname').innerHTML = response.asname;
        document.getElementById('mobile').innerHTML = response.mobile;
        document.getElementById('proxy').innerHTML = response.proxy;
        document.getElementById('hosting').innerHTML = response.hosting;

    }
};
xhr.open('GET', endpoint, true);
xhr.send();

document.getElementById('searchBtn').addEventListener('click', function () {
    var search = document.getElementById('search').value;
    var endpoint = 'http://ip-api.com/json/' + search;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById('ip').innerHTML = response.query;
            document.getElementById('country').innerHTML = response.country;
            document.getElementById('region').innerHTML = response.regionName;
            document.getElementById('city').innerHTML = response.city;
            document.getElementById('zip').innerHTML = response.zip;
            document.getElementById('lat').innerHTML = response.lat;
            document.getElementById('lon').innerHTML = response.lon;
            document.getElementById('timezone').innerHTML = response.timezone;
            document.getElementById('isp').innerHTML = response.isp;
            document.getElementById('org').innerHTML = response.org;
            document.getElementById('as').innerHTML = response.as;
            document.getElementById('asname').innerHTML = response.asname;
            document.getElementById('mobile').innerHTML = response.mobile;
            document.getElementById('proxy').innerHTML = response.proxy;
            document.getElementById('hosting').innerHTML = response.hosting;
        }
    };
    xhr.open('GET', endpoint, true);
    xhr.send();
});*/

function initMap() {

    var endpoint = 'http://ip-api.com/json';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);

            document.getElementById('ip').innerHTML = response.query;
            document.getElementById('country').innerHTML = response.country;
            document.getElementById('region').innerHTML = response.regionName;
            document.getElementById('city').innerHTML = response.city;
            document.getElementById('zip').innerHTML = response.zip;
            document.getElementById('lat').innerHTML = response.lat;
            document.getElementById('lon').innerHTML = response.lon;
            document.getElementById('timezone').innerHTML = response.timezone;
            document.getElementById('isp').innerHTML = response.isp;
            document.getElementById('org').innerHTML = response.org;
            document.getElementById('as').innerHTML = response.as;
            document.getElementById('asname').innerHTML = response.asname;
            document.getElementById('mobile').innerHTML = response.mobile;
            document.getElementById('proxy').innerHTML = response.proxy;
            document.getElementById('hosting').innerHTML = response.hosting;

            // The location of Uluru
            const uluru = { lat: response.lat, lng: response.lon };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("googlemap"), {
                zoom: 14,
                center: uluru,
            });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });

        }
    };
    xhr.open('GET', endpoint, true);
    xhr.send();

    document.getElementById('searchBtn').addEventListener('click', function () {
        var search = document.getElementById('search').value;
        var endpoint = 'http://ip-api.com/json/' + search;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                console.log(response);
                
                document.getElementById('ip').innerHTML = response.query;
                document.getElementById('country').innerHTML = response.country;
                document.getElementById('region').innerHTML = response.regionName;
                document.getElementById('city').innerHTML = response.city;
                document.getElementById('zip').innerHTML = response.zip;
                document.getElementById('lat').innerHTML = response.lat;
                document.getElementById('lon').innerHTML = response.lon;
                document.getElementById('timezone').innerHTML = response.timezone;
                document.getElementById('isp').innerHTML = response.isp;
                document.getElementById('org').innerHTML = response.org;
                document.getElementById('as').innerHTML = response.as;
                document.getElementById('asname').innerHTML = response.asname;
                document.getElementById('mobile').innerHTML = response.mobile;
                document.getElementById('proxy').innerHTML = response.proxy;
                document.getElementById('hosting').innerHTML = response.hosting;

                // The location of Uluru
                const uluru = { lat: response.lat, lng: response.lon };
                // The map, centered at Uluru
                const map = new google.maps.Map(document.getElementById("googlemap"), {
                    zoom: 4,
                    center: uluru,
                });
                // The marker, positioned at Uluru
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map,
                });
            }
        };

        xhr.open('GET', endpoint, true);
        xhr.send();
    });


}

window.initMap = initMap;
