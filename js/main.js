// ======== MOBILE NAV MENU FUNCTIONALITY ========

// Seleccionamos elementos clave
const toggle = document.querySelector(".nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Si ambos existen, aplicamos funcionalidad
if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    // Alternar visualización del menú móvil
    const isOpen = mobileMenu.classList.toggle("is-open");

    // Cambiar estilo del botón hamburguesa (líneas → X)
    toggle.classList.toggle("is-open", isOpen);

    // Accesibilidad (A11y)
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    // Bloquear scroll del body cuando el menú está abierto
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Cerrar el menú al hacer clic en un enlace dentro del menú móvil
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      mobileMenu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
}
