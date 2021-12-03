// const deportista = {
//     nombre: 'Messi',
//     champions: 4,
// }

// // const otroDeportista = "{'nombre': 'Messi','champions': 4}"
// const otroDeportista = '{"nombre": "Messi","champions": 4}'

// console.log(JSON.stringify(deportista))
// console.log(JSON.parse(otroDeportista))

fetch('http://127.0.0.1:5500/webDev/10-aprendiendo-json/pasajeros.json')
    .then((response) => response.json())
    .then((pasajeros) => {
        const nombresDePasajeros = pasajeros.map((pasajero) => pasajero.nombre);
        console.log(nombresDePasajeros);
    });