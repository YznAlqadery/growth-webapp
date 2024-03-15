const faqCard = document.querySelectorAll(".faq-card");

faqCard.forEach((card) => {
  card.addEventListener("click", (e) => {
    const currentCard = e.target;
    const parentCard = currentCard.closest(".faq-card");
    const headerCard = currentCard.closest(".faq-card-header");

    if (!headerCard) return;

    const answer = parentCard.querySelector(".faq-card-body");
    answer.classList.toggle("opened");
    const icon = headerCard.querySelector(".icon").querySelector("i");

    icon.classList.toggle("fa-minus");
    icon.classList.toggle("fa-plus");
  });
});
