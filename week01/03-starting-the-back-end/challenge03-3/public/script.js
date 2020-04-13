const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  const cardId = card.id;

  card.addEventListener('click', function() {
    window.location.href = `/courses/${cardId}`;
  });
}
