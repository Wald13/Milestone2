
document.addEventListener("DOMContentLoaded", () => {
  const cardData = [
    { id: 1, img: "assets/images/gohan1.jpg" },
    { id: 2, img: "assets/images/goku1.jpg" },
    { id: 3, img: "assets/images/goku2.jpg" },
    { id: 4, img: "assets/images/goku3.jpg" },
    { id: 5, img: "assets/images/goku4.jpg" },
    { id: 6, img: "assets/images/goten1.jpg" },
    { id: 7, img: "assets/images/vegeta1.jpg" },
    { id: 8, img: "assets/images/vegito1.jpg" },
  ];

  let cards = [...cardData, ...cardData];
  let firstCard = null;
  let lock = false;
  let score = 0;
  let flips = 0;

  const cardbox = document.querySelector(".cardbox");
  const scoreDisplay = document.getElementById("score");
  const flipDisplay = document.getElementById("flips");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createCardElement(cardInfo) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = cardInfo.id;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="assets/images/cardbacksideedit.jpg" alt="Card front">
        </div>
        <div class="card-back">
          <img src="${cardInfo.img}" alt="Card back">
        </div>
      </div>
    `;

    card.addEventListener("click", () => handleCardClick(card));
    return card;
  }

  function loadCards() {
    cardbox.innerHTML = "";
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(cardData => {
      const cardElement = createCardElement(cardData);
      cardbox.appendChild(cardElement);
    });
  }

function handleCardClick(card) {
  const inner = card.querySelector(".card-inner");
  if (lock || inner.classList.contains("flipped")) return;

  inner.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  const secondCard = card;
  const firstId = firstCard.dataset.id;
  const secondId = secondCard.dataset.id;

  // Count one flip pair here
  flips++;
  flipDisplay.textContent = flips;

  if (firstId === secondId && firstCard !== secondCard) {
    score += 1;
    scoreDisplay.textContent = score;

    setTimeout(() => {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");

      if (score === cardData.length) {
        setTimeout(() => {
          document.getElementById("winModal").style.display = "block";
        }, 500);
      }

      firstCard = null;
      lock = false;
    }, 600);
  } else {
    lock = true;
    setTimeout(() => {
      firstCard.querySelector(".card-inner").classList.remove("flipped");
      secondCard.querySelector(".card-inner").classList.remove("flipped");
      firstCard = null;
      lock = false;
    }, 1000);
  }
}

  function startNewGame() {
    score = 0;
    flips = 0;
    scoreDisplay.textContent = score;
    flipDisplay.textContent = flips;
    firstCard = null;
    lock = false;
    loadCards();
  }

  document.getElementById("ngb").addEventListener("click", startNewGame);

  document.querySelector("#winModal .close-win").addEventListener("click", function () {
    document.getElementById("winModal").style.display = "none";
  });

  document.getElementById("nextGame").addEventListener("click", () => {
    document.getElementById("winModal").style.display = "none";
    startNewGame();
  });

  loadCards();
});

// Modal for instructions
document.getElementById("openInstructions").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("instructionsModal").style.display = "block";
});

document.querySelector("#instructionsModal .close").addEventListener("click", function () {
  document.getElementById("instructionsModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  const modal = document.getElementById("instructionsModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});