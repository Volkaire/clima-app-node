const { getLugarLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let direccion = argv.direccion;

const getInfo = async(direccion) => {

    try {
        const coordenadas = await getLugarLatLng(direccion);
        const temperatura = await getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temperatura} °C`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} ${error}`;
    }
}

getInfo(direccion)
    .then(console.log)
    .catch(console.log)