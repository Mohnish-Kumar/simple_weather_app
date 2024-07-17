document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = "71f5a27de759ae054237bacec913b4b6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('city-name').innerText = "No City Found";
                clearWeatherInfo();
            } else {
                const {
                    coord,
                    weather,
                    main,
                    visibility,
                    wind,
                    clouds,
                    sys,
                    name
                } = data;

                document.getElementById('city-name').innerText = `Weather in ${name}`;
                document.getElementById('coordinates').innerText = `Coordinates: ${coord.lat}, ${coord.lon}`;
                document.getElementById('weather').innerText = `Weather: ${weather[0].main}`;
                document.getElementById('description').innerText = `Description: ${weather[0].description}`;
                document.getElementById('temperature').innerText = `Temperature: ${main.temp}°C`;
                document.getElementById('feels-like').innerText = `Feels Like: ${main.feels_like}°C`;
                // document.getElementById('min-temp').innerText = `Min Temperature: ${main.temp_min}°C`;
                // document.getElementById('max-temp').innerText = `Max Temperature: ${main.temp_max}°C`;
                document.getElementById('pressure').innerText = `Pressure: ${main.pressure} hPa`;
                document.getElementById('humidity').innerText = `Humidity: ${main.humidity}%`;
                document.getElementById('visibility').innerText = `Visibility: ${visibility} meters`;
                // document.getElementById('wind-speed').innerText = `Wind Speed: ${wind.speed} m/s`;
                document.getElementById('wind-speed').innerText = `Wind Speed: ${(wind.speed*18)/5} Km/h`;
                document.getElementById('wind-direction').innerText = `Wind Direction: ${wind.deg}°`;
                // document.getElementById('wind-gust').innerText = `Wind Gust: ${wind.gust} m/s`;
                document.getElementById('wind-gust').innerText = `Wind Gust: ${(wind.gust*18)/5} Km/h`;
                document.getElementById('clouds').innerText = `Cloudiness: ${clouds.all}%`;
                document.getElementById('sunrise').innerText = `Sunrise: ${new Date(sys.sunrise * 1000).toLocaleTimeString()}`;
                document.getElementById('sunset').innerText = `Sunset: ${new Date(sys.sunset * 1000).toLocaleTimeString()}`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById('city-name').innerText = "An error occurred. Please try again.";
            clearWeatherInfo();
        });
});

function clearWeatherInfo() {
    document.getElementById('coordinates').innerText = "";
    document.getElementById('weather').innerText = "";
    document.getElementById('description').innerText = "";
    document.getElementById('temperature').innerText = "";
    document.getElementById('feels-like').innerText = "";
    document.getElementById('min-temp').innerText = "";
    document.getElementById('max-temp').innerText = "";
    document.getElementById('pressure').innerText = "";
    document.getElementById('humidity').innerText = "";
    document.getElementById('visibility').innerText = "";
    document.getElementById('wind-speed').innerText = "";
    document.getElementById('wind-direction').innerText = "";
    document.getElementById('wind-gust').innerText = "";
    document.getElementById('clouds').innerText = "";
    document.getElementById('sunrise').innerText = "";
    document.getElementById('sunset').innerText = "";
}
