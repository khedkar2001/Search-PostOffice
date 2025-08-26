navigator.geolocation.getCurrentPosition(
    function (position) {
        //    initMap(position.coords.latitude, position.coords.longitude)
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        const api_key = '6005bef9fa3d4a3e914a11e9ee4a94af';

        const container_div = document.getElementById("container");

        var requestOptions = {
            method: 'GET',
        };

        // feting data using api to show in the white-container
        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${api_key}`, requestOptions)
            .then(response => response.json())
            .then(result => container_div.innerHTML = `<p>Name Of Time Zone : ${result.features[0].properties.timezone.name}</p>
            <span class="flex"><span>Lat: ${result.features[0].properties.lat}</span>
            <span>Long: ${result.features[0].properties.lon}</span></span>
            <p>Offset STD: ${result.features[0].properties.timezone.offset_STD}</p>
            <p>Offset STD Seconds : ${result.features[0].properties.timezone.offset_STD_seconds}</p>
            <p>Offset DST : ${result.features[0].properties.timezone.offset_DST}</p>
            <p>Offset DST Seconds: ${result.features[0].properties.timezone.offset_DST_seconds}</p>
            <p>Country: ${result.features[0].properties.country}</p>
            <p>Postcode: ${result.features[0].properties.postcode}</p>
            <p>City: ${result.features[0].properties.city}</p>`)
            .catch(error => console.log('error', error));
    }
)

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const search_bar = document.getElementById("search-bar");
    const enteredAddress = search_bar.value.trim();

    // Validate the entered address
    if (enteredAddress === "") {
        alert("Please enter a valid address.");
        return;
    }


    // Retrieve Timezone by Address
    const api_key = '6005bef9fa3d4a3e914a11e9ee4a94af';
    const container_2 = document.getElementById("container-2");

    var requestOptions = {
        method: 'GET',
    };

    fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(enteredAddress)}&apiKey=${api_key}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const firstResult = result.features[0];
            const lat = firstResult.geometry.coordinates[1];
            const lon = firstResult.geometry.coordinates[0];

            // Fetch timezone based on the coordinates
            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${api_key}`, requestOptions)
                .then(response => response.json())
                .then(timezoneResult => {
                    let data = timezoneResult.features[0].properties;
                    container_2.innerHTML = `<p>Name Of Time Zone : ${data.timezone.name}</p>
                    <span class="flex"><span>Lat: ${data.lat}</span>
                    <span>Long: ${data.lon}</span></span>
                    <p>Offset STD: ${data.timezone.offset_STD}</p>
                    <p>Offset STD Seconds : ${data.timezone.offset_STD_seconds}</p>
                    <p>Offset DST : ${data.timezone.offset_DST}</p>
                    <p>Offset DST Seconds: ${data.timezone.offset_DST_seconds}</p>
                    <p>Country: ${data.country}</p>
                    <p>Postcode: ${data.postcode}</p>
                    <p>City: ${data.city}</p>`;
                    // console.log(timezoneResult)

                    document.getElementById("hidden-container").style.display="block";
                })
                .catch(error => console.log('error', error));
        })
        .catch(error => console.log('error', error));
    
})