import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/find?q='

const getWeatherCapital = (capital,apiKey) => {
    return axios.get(`${baseUrl}${capital}&appid=${apiKey}`)
}


export default { getWeatherCapital };