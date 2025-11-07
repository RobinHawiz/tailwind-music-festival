import "/styles/style.css";

window.onload = () => {
  const mobileMenuIcon = document.getElementById("mobile-menu-button");
  mobileMenuIcon?.addEventListener("click", () => {
    mobileMenuIcon.classList.toggle("open");
  });

  const ticketMenuButton = document.getElementById("ticket-menu-button");
  ticketMenuButton?.addEventListener("click", () => {
    ticketMenuButton.classList.toggle("open");
  });

  const previousButton = document.getElementById("previous")!;
  const nextButton = document.getElementById("next")!;
  const carousel = document.getElementById("carousel")!;
  const itemWidth = carousel.getElementsByTagName("article")[0].clientWidth;

  previousButton.addEventListener("click", () => {
    carousel.scrollLeft = carousel.scrollLeft - itemWidth;
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollLeft = carousel.scrollLeft + itemWidth;
  });
};
