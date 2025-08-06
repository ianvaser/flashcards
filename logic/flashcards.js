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
    cards.forEach(card => {
    card.classList.remove('flipped'); // 👈 esto la vuelve al frente
    });
    i++;
    document.getElementById("pregunta").textContent = pregunta[i];
    document.getElementById("respuesta").textContent = respuesta[i];
    progressBar.style.setProperty('--progress', (i + 1) / pregunta.length * 100 + '%');
    if (i >= (pregunta.length - 1)) {
        i = -1; // Reiniciar al final de la lista
        progressBar.value = 0; // Reiniciar la barra de progreso
      }
}

const progressBar = document.querySelector(".progress");
