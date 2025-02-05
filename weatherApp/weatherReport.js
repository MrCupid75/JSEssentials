const showWeatherDetails = (event) => {

    event.preventDefault();

    const city = document.querySelector("#city").value;
    const apikey = 'be6a9526a1f678a927a298ee9d92dfdc'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.name)
            console.log(data.main.temp)
            console.log(data.weather[0].description)
            const weatherInfo = document.querySelector("#weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>
                `
        }).catch(error => {
            console.log("Erro fetching weather:", error);
            const weatherInfo = document.querySelector("#weatherInfo")
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

//showWeatherDetails('Ghana')

document.getElementById("weatherForm").addEventListener('submit', showWeatherDetails);