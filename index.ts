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
};
