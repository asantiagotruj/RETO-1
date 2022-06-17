import {personajes} from './datos.js';

let posicion = localStorage.getItem('posicion');

document.addEventListener('DOMContentLoaded', () => {
let container = document.getElementById('container');
let botonVolver = document.createElement('button');
botonVolver.classList.add('boton-volver');
botonVolver.innerText = 'volver';

botonVolver.addEventListener('click',function () {
    window.location.href = '../vista-principal.html';
});

container.appendChild(botonVolver);

let container1 = document.createElement('div');
container1.classList.add('container1');

let contenedorImagen = document.createElement('div');
contenedorImagen.classList.add('contenedor-imagen');
let personaje = document.createElement('img');
personaje.classList.add('personaje');
personaje.setAttribute('src', `${personajes[posicion].imagen}`);
contenedorImagen.appendChild(personaje);

let contenedorDescripcion = document.createElement('div');
contenedorDescripcion.classList.add('contenedor-descripcion');

let tituloPersonaje = document.createElement('p');
tituloPersonaje.classList.add('titulo-personaje');
tituloPersonaje.innerText = `${personajes[posicion].nombre}`;

let descripcionPersonaje = document.createElement('p');
descripcionPersonaje.classList.add('descripcion-personaje');
descripcionPersonaje.innerText = `${personajes[posicion].descripcion}`;

contenedorDescripcion.appendChild(tituloPersonaje);
contenedorDescripcion.appendChild(descripcionPersonaje);

container1.appendChild(contenedorImagen);
container1.appendChild(contenedorDescripcion);
container.appendChild(container1);

});

