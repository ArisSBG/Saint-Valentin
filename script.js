const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const resultDiv = document.getElementById('result');
const container = document.querySelector('.container');

// Lorsque la souris survole le bouton "Non", il se déplace dans la zone de la .container
noButton.addEventListener('mouseover', () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // Calculer les positions maximales pour que le bouton reste visible dans la .container
  const maxLeft = containerRect.width - buttonRect.width;
  const maxTop = containerRect.height - buttonRect.height;

  // Position aléatoire
  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);

  // Passer en position absolue pour pouvoir le déplacer
  noButton.style.position = 'absolute';
  noButton.style.left = randomLeft + 'px';
  noButton.style.top = randomTop + 'px';
});

// Lorsque le bouton "Oui" est cliqué, afficher un beau message
yesButton.addEventListener('click', () => {
  resultDiv.textContent = "Je savais que tu m'aimais ! Je t'aime très fort ❤️ MON ALMA 😘💍";
});
