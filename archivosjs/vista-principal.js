import {personajes} from './datos.js';


let container = document.querySelector('#personaje-actual');
let detalle = document.querySelector('#detalle');
let botonVolver = document.querySelector('.boton-volver');

let container1 = document.createElement('div');
container1.classList.add('container1');

let atras = document.createElement('button');
atras.classList.add('atras');
let botonAtras = document.createElement('img');
botonAtras.classList.add('botones');
botonAtras.setAttribute('src', './images/atras.png' )
atras.appendChild(botonAtras);

let contenedorImagen = document.createElement('div');
contenedorImagen.classList.add('contenedorImagen');
let personaje = document.createElement('img');
personaje.classList.add('personaje');
personaje.setAttribute('src',`${personajes[0].imagen}` );
contenedorImagen.appendChild(personaje);

let adelante = document.createElement('button');
adelante.classList.add('adelante');
let botonAdelante = document.createElement('img');
botonAdelante.classList.add('botones');
botonAdelante.setAttribute('src', './images/adelante.png');
adelante.appendChild(botonAdelante);

let botonDescripcionPersonaje = document.createElement('button');
botonDescripcionPersonaje.classList.add('descripcionPersonaje');
botonDescripcionPersonaje.innerText = `${personajes[0].nombre}`;

container1.appendChild(atras);
container1.appendChild(contenedorImagen);
container1.appendChild(adelante);

container.appendChild(container1);

container.appendChild(botonDescripcionPersonaje);

let posicionActual = 0;

atras.disabled = true;

adelante.addEventListener('click', function() {
    if (posicionActual + 1 < 10) {
        posicionActual = posicionActual + 1;
        const personajeActual = personajes[posicionActual];
        const imagen = personajeActual.imagen;
        const nombre = personajeActual.nombre;
        botonDescripcionPersonaje.innerText = nombre;
        personaje.setAttribute('src', imagen);
    }
     if (posicionActual > 0){
        atras.disabled = false;
    }
});

atras.addEventListener('click', function(){
    if (posicionActual - 1 > -1) {
        posicionActual = posicionActual - 1;
        const personajeActual = personajes[posicionActual];
        const imagen = personajeActual.imagen;
        const nombre = personajeActual.nombre;
        botonDescripcionPersonaje.innerText = nombre;
        personaje.setAttribute('src', imagen);
    }
});

botonDescripcionPersonaje.addEventListener('click', function() {
    localStorage.setItem('posicion', posicionActual);
    window.location.href = '../vista-detalle.html';
})

botonVolver.addEventListener('click', function () {
    container.style.display = 'block';
    detalle.style.display = 'none';
})




