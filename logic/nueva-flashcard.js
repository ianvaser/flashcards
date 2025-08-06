import { getPreguntas, getRespuestas } from './funciones-variables-globales.js';

const cards = document.querySelectorAll('.card-inner');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const preguntas = getPreguntas();
const respuestas = getRespuestas();
let indiceActual = 0;

function mostrarFlashcard() {
  const preguntaEl = document.getElementById("pregunta");
  const respuestaEl = document.getElementById("respuesta");

  if (preguntas.length === 0) {
    preguntaEl.textContent = "No hay preguntas.";
    respuestaEl.textContent = "";
    return;
  }

  preguntaEl.textContent = preguntas[indiceActual];
  respuestaEl.textContent = respuestas[indiceActual];
}

function siguiente() {
  if (preguntas.length === 0) return;
  indiceActual = (indiceActual + 1) % preguntas.length;
  progressBar.style.setProperty('--progress',  (indiceActual + 1) / preguntas.length * 100 + '%');
  mostrarFlashcard();
}

function borrar() {
    if (preguntas.length === 0){
        alert("No hay preguntas para borrar.");
        return;
    } 
    preguntas.splice(indiceActual, 1);
    respuestas.splice(indiceActual, 1);
    localStorage.setItem("preguntas", JSON.stringify(preguntas));
    localStorage.setItem("respuestas", JSON.stringify(respuestas));
    alert("Pregunta borrada exitosamente.");
    
    if (preguntas.length > 0) {
        indiceActual = indiceActual % preguntas.length;
        mostrarFlashcard();
    } else {
        document.getElementById("pregunta").textContent = "No hay preguntas.";
        document.getElementById("respuesta").textContent = "";
    }
}


document.addEventListener("DOMContentLoaded", mostrarFlashcard);
window.siguiente = siguiente;
window.borrar = borrar;

const progressBar = document.querySelector(".progress");