import axios from 'axios';
import colors from 'colors';

export class WeatherAPI {
    constructor(key){
        this.apiKey = key;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeather(place){
        try {
            const res = await axios.get(`${this.baseUrl}?q=${place}&appid=${this.apiKey}&units=metric`);
            return res.data;
        } catch(err){
            handleError(err);
        }
    }
}

function handleError(err){
    if (err.response.status === 401){
        throw new Error('Your API Key is invalid. [GET AT https://openweathermap.org/]');
    } else if (err.response.status === 404){
        throw new Error('City not found');
    } else {
        throw new Error('Something was wrong');
    }
}