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
  let totalScore = 0;
  let flips = 0;
  let round = 1;
  let gamesWon = 0;
  let timer = 0;
  let timerInterval;
  let timerStarted = false;

  const cardbox = document.querySelector(".cardbox");
  const scoreDisplay = document.getElementById("score");
  const flipDisplay = document.getElementById("flips");
  const roundDisplay = document.getElementById("roundDisplay");
  const totalScoreDisplay = document.getElementById("totalScoreDisplay");
  const gamesWonDisplay = document.getElementById("gamesWonDisplay");
  const timerDisplay = document.getElementById("timer");

  const backgrounds = [
    "assets/images/backgroundimagegame1.jpg",
    "assets/images/backgroundimagegame2.jpg",
    "assets/images/backgroundimagegame3.jpg",
  ];

  // Set a random background image for each round
  function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    cardbox.style.backgroundImage = `url('${selectedBackground}')`;
    cardbox.style.backgroundSize = '400px 480px';
    cardbox.style.backgroundPosition = 'center';
    cardbox.style.backgroundRepeat = 'no-repeat';
  }

  // Shuffle cards array using Fisher-Yates algorithm
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Create a card DOM element with click listener
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

  // Load cards into the DOM
  function loadCards() {
    cardbox.innerHTML = "";
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(cardData => {
      const cardElement = createCardElement(cardData);
      cardbox.appendChild(cardElement);
    });
  }

  // Handle a card being clicked
  function handleCardClick(card) {
    if (!timerStarted) {
      timerStarted = true;
      startTimer();
    }

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

    flips++;
    flipDisplay.textContent = flips;

    if (firstId === secondId && firstCard !== secondCard) {
      // Match found
      score += 1;
      totalScore += 1;
      scoreDisplay.textContent = score;
      totalScoreDisplay.textContent = `Total Score: ${totalScore}`;

      setTimeout(() => {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        if (score === cardData.length) {
          // Round completed
          gamesWon++;
          gamesWonDisplay.textContent = `Games Won: ${gamesWon}`;

          setTimeout(() => {
            document.getElementById("winModal").style.display = "block";
          }, 500);

          round++;
          roundDisplay.textContent = `Round: ${round}`;
          clearInterval(timerInterval); // Stop timer when round ends
        }

        firstCard = null;
        lock = false;
      }, 600);
    } else {
      // No match, flip back
      lock = true;
      setTimeout(() => {
        firstCard.querySelector(".card-inner").classList.remove("flipped");
        secondCard.querySelector(".card-inner").classList.remove("flipped");
        firstCard = null;
        lock = false;
      }, 1000);
    }
  }

  // Start a brand new game from scratch
  function startNewGame() {
    score = 0;
    totalScore = 0;
    flips = 0;
    round = 0;
    gamesWon = 0;
    timerStarted = false;
    resetTimer();

    scoreDisplay.textContent = score;
    totalScoreDisplay.textContent = `Total Score: ${totalScore}`;
    flipDisplay.textContent = flips;
    roundDisplay.textContent = `Round: ${round}`;
    gamesWonDisplay.textContent = `Games Won: ${gamesWon}`;
    startRound();
  }

  // Start a new round without resetting total score or games won
  function startRound() {
    score = 0;
    flips = 0;
    flipDisplay.textContent = flips;
    scoreDisplay.textContent = score;
    firstCard = null;
    lock = false;
    timerStarted = false;
    resetTimer();

    loadCards();
    setRandomBackground();
  }

  // Start the round timer
  function startTimer() {
    timer = 0;
    timerDisplay.textContent = timer;
    clearInterval(timerInterval); // Prevent duplicate timers
    timerInterval = setInterval(() => {
      timer++;
      timerDisplay.textContent = timer;
    }, 1000);
  }

  // Reset and stop the timer
  function resetTimer() {
    clearInterval(timerInterval);
    timer = 0;
    timerDisplay.textContent = timer;
  }

  // Button Listeners
  document.getElementById("ngb").addEventListener("click", startNewGame);
  document.getElementById("nextGame").addEventListener("click", () => {
    document.getElementById("winModal").style.display = "none";
    startRound();
  });
  document.querySelector("#winModal .close-win").addEventListener("click", () => {
    document.getElementById("winModal").style.display = "none";
  });

  // Initial load setup
  loadCards();
  setRandomBackground();
});
