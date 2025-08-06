import { agregarPregunta, agregarRespuesta } from './funciones-variables-globales.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("flashcard-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const preguntaInput = document.getElementById("nueva-pregunta").value.trim();
    const respuestaInput = document.getElementById("nueva-respuesta").value.trim();

    const preguntas = agregarPregunta(preguntaInput);
    const respuestas = agregarRespuesta(respuestaInput);

    if (preguntas && respuestas) {

      const li = document.createElement("li");
      li.textContent = `${preguntaInput} - ${respuestaInput}`;
      document.getElementById("flashcard-list").appendChild(li);
    }
  });
});