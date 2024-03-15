const faqCard = document.querySelectorAll(".faq-card");
const closeSidebar = document.querySelector(".close-menu");
const openSidebar = document.querySelector(".menu-bar");

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

closeSidebar.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
});

openSidebar.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
});
