const axios = require('axios');

const getClima = async(lat, lng) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=154b767eec56fbdb0da305b6bb6c8391&units=metric`)
    return response.data.main.temp;
}

module.exports = {
    getClima
}