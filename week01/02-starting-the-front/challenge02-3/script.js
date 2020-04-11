const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// Open modal
for (let card of cards) {
  const cardId = card.id;

  card.addEventListener('click', function() {
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`;
  });
}

// Close modal
document.querySelector('#modal-close').addEventListener('click', function() {
  modalOverlay.classList.remove('active', 'max');
  modalOverlay.querySelector('iframe').src = "";
});

// Toggle maximized modal
document.querySelector('#toggle-screen').addEventListener('click', function() {
  modalOverlay.classList.toggle('max');
});
