const cards = document.querySelectorAll('.card-inner');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

let i = 0;
const pregunta = ["¿Cuál es la capital de Francia?", "¿Cuál es el río más largo del mundo?", "¿Quién escribió 'Cien años de soledad'?"];
const respuesta = ["París", "Amazonas", "Gabriel García Márquez"];

document.getElementById("pregunta").textContent = pregunta[i];
document.getElementById("respuesta").textContent = respuesta[i];

function siguiente() {
    i++;
    document.getElementById("pregunta").textContent = pregunta[i];
    document.getElementById("respuesta").textContent = respuesta[i];
    if (i >= (pregunta.length - 1)) {
        i = -1; // Reiniciar al final de la lista
    }
}
