const envelopeScreen = document.getElementById("start");
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const card = document.getElementById("card");
const replay = document.getElementById("replay");

function openCard() {
  envelopeScreen.classList.add("open");
  setTimeout(() => {
    card.classList.add("visible");
    card.setAttribute("aria-hidden", "false");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 650);
}

openButton.addEventListener("click", openCard);
envelope.addEventListener("click", openCard);
envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") openCard();
});

document.querySelectorAll(".ticket").forEach(ticket => {
  ticket.addEventListener("click", () => {
    const panel = document.getElementById(ticket.dataset.target);
    const isOpen = panel.classList.contains("active");

    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    if (!isOpen) {
      panel.classList.add("active");
      setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "nearest" }), 30);
    }
  });
});

document.querySelectorAll(".close-panel").forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    button.closest(".panel").classList.remove("active");
  });
});

replay.addEventListener("click", () => {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  card.classList.remove("visible");
  card.setAttribute("aria-hidden", "true");
  envelopeScreen.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
