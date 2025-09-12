function goExample(){
    window.location.href = "../templates/ejemplo.html"
}
function goCreate(){
    window.location.href = "../templates/crear.html"
}

const cards = document.querySelectorAll('.card-inner');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    
  });
});
