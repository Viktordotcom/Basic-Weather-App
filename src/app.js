export async function getWeatherData() {
  try {
    const API_KEY = "71a8d60b6ad049e9a5213a0839b3565a";
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        document.querySelector("input").value
      }&APPID=${API_KEY}`
    );
    const data = response.json();

    return data;
  } catch (err) {
    return err;
  }
}

export async function getImageData() {
  try {
    const API_KEY = "CkoGftj7IkqFnNRkm1dFFnIXV6b2ZTO7";
    const weatherData = await getWeatherData();
    let weatherDescription = weatherData.weather[0].main;
    if (weatherDescription === "Clear") {
      weatherDescription = "Clear sky";
    }
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${weatherDescription}`,
      { mode: `cors` }
    );
    const data = response.json();

    return data;
  } catch (err) {
    return err;
  }
}

export function convertKelvinToCelsius(temp) {
  const result = Math.round(temp - 273.15);
  return result;
}

export function convertCelsiusToFarenheit(temp) {
  const result = Math.round((temp * 9) / 5 + 32);
  return result;
}
