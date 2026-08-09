const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionCard = document.getElementById('questionCard');
const detailsCard = document.getElementById('detailsCard');
const btnGroup = document.getElementById('btnGroup');

// Position the No button initially next to the Yes button
function setInitialNoPosition() {
  noBtn.style.left = (yesBtn.offsetLeft + yesBtn.offsetWidth + 20) + 'px';
  noBtn.style.top = yesBtn.offsetTop + 'px';
}

setInitialNoPosition();


// Function to fly the No button anywhere on screen
function dodgeNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Use visualViewport for mobile screen dimensions
  const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  const maxX = viewportWidth - btnWidth - 20;
  const maxY = viewportHeight - btnHeight - 20;

  const randomX = Math.max(20, Math.floor(Math.random() * maxX));
  const randomY = Math.max(20, Math.floor(Math.random() * maxY));

  noBtn.style.position = 'fixed';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Trigger evade effect on hover, click, or touch
noBtn.addEventListener('mouseenter', dodgeNoButton);
noBtn.addEventListener('click', dodgeNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  dodgeNoButton();
});

// Handle Yes click
yesBtn.addEventListener('click', () => {
  questionCard.style.display = 'none';
  noBtn.style.display = 'none';
  detailsCard.style.display = 'block';
});
