const weatherContainer = document.getElementById("weather-container");
const citySearchInp = document.getElementById("search-input");

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCityTemp = function (cityName) {
  getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=44a2fd337955e121930b16430de40810&units=metric
`,
    "City not found"
  )
    .then((data) => {
      console.log(data);

      displayWeather(data);
    })
    .catch(
      (err) =>
        (weatherContainer.innerHTML = `<h2 class='error'>${err.message}</h2>`)
    );
};

const displayWeather = function (data) {
  weatherContainer.innerHTML = "";
  let html = `
        <div class="icon">
          <div class="img">
            <img src="./images/${data.weather[0].icon}.png" alt="" />
          </div>
        </div>
        <div class="weather-info">
          <h1 class="temp">${data.main.temp.toFixed(1)}°C</h1>
          <h4 class="condition">${data.weather[0].description}</h4>
          <h2 class="city">${data.name}, <span class="country">${
    data.sys.country
  }</span></h2>
          <div class="detail-info">
            <div class="detail-item">
              <div class="icon">💧</div>
              <div>
                <div class="value">${data.main.humidity}%</div>
                <div class="label">Humidity</div>
              </div>
            </div>
            <div class="detail-item">
              <div class="icon">💨💨</div>
              <div>
                <div class="value">${data.wind.speed} Km/h</div>
                <div class="label">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
  `;
  chnageBackgournd(data);
  weatherContainer.insertAdjacentHTML("beforeend", html);
};

citySearchInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getCityTemp(`${citySearchInp.value}`);
  }
});

const chnageBackgournd = function (data) {
  const checkIfDayOrNight = /[d]/i;
  if (checkIfDayOrNight.test(data.weather[0].icon)) {
    document.body.style.background = `linear-gradient(
    to left,
    var(--color-card-background),
    var(--color-accent-blue)
  )`;
  } else {
    document.body.style.background = `linear-gradient(
    to left,
    var(--color-background-dark),
    var(--color-background-dark-right)
  )`;
  }
};

navigator.geolocation.getCurrentPosition(
  function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getJSON(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=44a2fd337955e121930b16430de40810&units=metric
`,
      "Could not get your location"
    )
      .then((data) => {
        console.log(data);

        displayWeather(data);
      })
      .catch(
        (err) =>
          (weatherContainer.innerHTML = `<h2 class='error'>${err.message}</h2>`)
      );
  },
  function () {
    console.log("could not get your position");
  }
);
