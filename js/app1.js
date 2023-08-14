const IP_API = "https://ip-api.io/json";

fetch(IP_API)

    .then((response) => response.json())

    .then((data) => {

        console.log(data);

        document.querySelector("#ip").innerHTML = `${data.query}`;

        document.querySelector("#continent").innerHTML = `${data.continent}`;

        document.querySelector("#continentCode").innerHTML = `${data.continentCode}`;

        document.querySelector("#country").innerHTML = `${data.country}`;

        document.querySelector("#countryCode").innerHTML = `${data.countryCode}`;

        document.querySelector("#region").innerHTML = `${data.region}`;

        document.querySelector("#regionName").innerHTML = `${data.regionName}`;

        document.querySelector("#city").innerHTML = `${data.city}`;

        document.querySelector("#district").innerHTML = `${data.district}`;

        document.querySelector("#zip").innerHTML = `${data.zip}`;

        document.querySelector("#lat").innerHTML = `${data.lat}`;

        document.querySelector("#lon").innerHTML = `${data.lon}`;

        document.querySelector("#timezone").innerHTML = `${data.timezone}`;

        document.querySelector("#isp").innerHTML = `${data.isp}`;

        document.querySelector("#org").innerHTML = `${data.org}`;

        document.querySelector("#as").innerHTML = `${data.as}`;

        document.querySelector("#asname").innerHTML = `${data.asname}`;

        document.querySelector("#mobile").innerHTML = `${data.mobile}`;

        document.querySelector("#proxy").innerHTML = `${data.proxy}`;

        document.querySelector("#hosting").innerHTML = `${data.hosting}`;

        document.querySelector("#dnsGEO").innerHTML = `${data.dns.geo}`;

        document.querySelector("#dnsIP").innerHTML = `${data.dns.ip}`;

    })

    .catch((error) => {

        console.log(error);

    }, []);




        




