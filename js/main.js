// ======== MENÚ MÓVIL NAVBAR ========

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Si no existen, salimos
  if (!toggle || !mobileMenu) return;

  // Asegurar que el menú empieza cerrado
  mobileMenu.classList.remove("is-open");
  toggle.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";

  // Abrir / cerrar al hacer clic en el ícono hamburguesa
  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");

    // Animación de las líneas (hamburguesa → X)
    toggle.classList.toggle("is-open", isOpen);

    // Accesibilidad
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    // Bloquear scroll del body cuando está abierto
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Cerrar menú cuando se hace clic en un link dentro del menú móvil
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      mobileMenu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
});
