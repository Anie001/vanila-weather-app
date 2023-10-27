function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
}

let apiKey = "2e67ada581cbfe3ce3d849417cd6754c";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
