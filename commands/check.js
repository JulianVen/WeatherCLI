
import { KeyManager } from '../lib/KeyManager.js';
import { WeatherAPI } from '../lib/WeatherAPI.js';

export const check = {
    async weather(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.get();

            const weatherAPI = new WeatherAPI(key);

            const weatherData = await weatherAPI.getWeather(cmd.place);
            
            //Weather data
            console.log('Weather Data:'.underline.blue);
            console.log('Location:'.bold.green, `${weatherData.name}, ${weatherData.sys.country}`.cyan);
            console.log('Coordinates:'.bold.green, `Lon: ${weatherData.coord.lon}, Lat: ${weatherData.coord.lat}`.cyan);
            console.log('Temperature:'.bold.green, `${weatherData.main.temp} °C`.cyan);
            console.log('Feels Like:'.bold.green, `${weatherData.main.feels_like} °C`.cyan);
            console.log('Min Temperature:'.bold.green, `${weatherData.main.temp_min} °C`.cyan);
            console.log('Max Temperature:'.bold.green, `${weatherData.main.temp_max} °C`.cyan);
            console.log('Pressure:'.bold.green, `${weatherData.main.pressure} hPa`.cyan);
            console.log('Humidity:'.bold.green, `${weatherData.main.humidity} %`.cyan);
            console.log('Visibility:'.bold.green, `${weatherData.visibility} meters`.cyan);
            console.log('Wind:'.bold.green, `Speed: ${weatherData.wind.speed} m/s, Degree: ${weatherData.wind.deg}°, Gust: ${weatherData.wind.gust} m/s`.cyan);
            console.log('Cloudiness:'.bold.green, `${weatherData.clouds.all} %`.cyan);
            console.log('Weather:'.bold.green, `${weatherData.weather[0].main} (${weatherData.weather[0].description})`.cyan);
            console.log('Sunrise:'.bold.green, new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().cyan);
            console.log('Sunset:'.bold.green, new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().cyan);
        } catch(err){
            console.log(err.message.red); 
        }
    }
}

