export function getPreguntas() {
  return JSON.parse(localStorage.getItem("preguntas")) || [];
}

export function getRespuestas() {
  return JSON.parse(localStorage.getItem("respuestas")) || [];
}

export function agregarPregunta(value) {
  const preguntas = getPreguntas();
  if (value) {
    preguntas.push(value);
    localStorage.setItem("preguntas", JSON.stringify(preguntas));
    document.getElementById("nueva-pregunta").value = '';
    return preguntas;
  } else {
    alert("Por favor, completa ambos campos.");
  }
}

export function agregarRespuesta(value) {
  const respuestas = getRespuestas();
  if (value) {
    respuestas.push(value);
    localStorage.setItem("respuestas", JSON.stringify(respuestas));
    document.getElementById("nueva-respuesta").value = '';
    return respuestas;
  } else {
    alert("Por favor, completa ambos campos.");
  }
}