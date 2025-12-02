// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileMenu.hidden = !isOpen;

    // Opcional: bloquear scroll del body cuando el menú está abierto
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Cerrar menú cuando se hace clic en un enlace del menú móvil
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
      document.body.style.overflow = "";
    }
  });
});
