document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const inner = card.querySelector('.card-inner');
        inner.classList.toggle('flipped');
    });
});
// Add event listener to instructions button to open modal
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