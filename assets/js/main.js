/**
 * ==========================================================================
 * Mariana Leão - Landing Page
 * Script Principal & Configurações Centrais (Vanilla JS)
 * ==========================================================================
 */

// 1. CONFIGURAÇÃO CENTRALIZADA
// Altere os valores abaixo para atualizar os contatos em toda a página.
const CONFIG = {
  whatsappNumber: "5500999999999", // Formato internacional: DDI + DDD + Número (apenas dígitos)
  crn: "CRN-X 00000",
  instagram: "@marianaleao.nutri",
  defaultMessage: "Olá, Mariana! Vim pelo seu site e gostaria de agendar uma consulta online."
};

/**
 * Utilitário para gerar a URL formatada do WhatsApp com mensagem customizada
 * @param {string} message - Mensagem opcional para URL encode
 * @returns {string} URL completa da API do WhatsApp
 */
function getWhatsAppUrl(message = CONFIG.defaultMessage) {
  const cleanNumber = CONFIG.whatsappNumber.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Inicializa os botões de ação do WhatsApp vinculando a URL configurada
 * Suporta botões gerais ([data-wa-trigger]) e botões específicos de planos ([data-plan])
 */
function initWhatsAppButtons() {
  const waButtons = document.querySelectorAll("[data-wa-trigger], [data-plan]");

  waButtons.forEach((btn) => {
    let targetMessage = CONFIG.defaultMessage;

    // Se for um botão de plano específico
    const planName = btn.getAttribute("data-plan");
    if (planName) {
      targetMessage = `Olá, Mariana! Vim pelo seu site e gostaria de saber mais informações sobre o Plano ${planName}.`;
    } else if (btn.getAttribute("data-wa-message")) {
      targetMessage = btn.getAttribute("data-wa-message");
    }

    const url = getWhatsAppUrl(targetMessage);

    if (btn.tagName.toLowerCase() === "a") {
      btn.setAttribute("href", url);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    } else {
      btn.addEventListener("click", () => {
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }
  });
}

/**
 * Preenche dados institucionais dinamicamente nos elementos marcados com data-config
 */
function populateConfigPlaceholders() {
  const configElements = document.querySelectorAll("[data-config]");
  configElements.forEach((el) => {
    const key = el.getAttribute("data-config");
    if (CONFIG[key]) {
      if (el.tagName.toLowerCase() === "a" && key === "instagram") {
        const username = CONFIG[key].replace("@", "");
        el.setAttribute("href", `https://instagram.com/${username}`);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        // Se o elemento não possuir texto estático personalizado, exibe o handle
        if (!el.getAttribute("data-keep-text")) {
          el.textContent = CONFIG[key];
        }
      } else {
        el.textContent = CONFIG[key];
      }
    }
  });
}

/**
 * Gerencia a responsividade e estados do menu mobile
 */
function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuToggle || !mobileMenu) return;

  function toggleMenu(forceClose = false) {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    const shouldClose = forceClose || isExpanded;

    menuToggle.setAttribute("aria-expanded", String(!shouldClose));
    
    if (shouldClose) {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    } else {
      mobileMenu.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
  }

  menuToggle.addEventListener("click", () => toggleMenu());

  // Fechar ao clicar em qualquer link da navegação mobile
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  // Fechar com tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      toggleMenu(true);
    }
  });
}

/**
 * Adiciona leve sombra ou efeito de elevação no header ao rolar a página
 */
function initHeaderScrollEffect() {
  const header = document.getElementById("site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("shadow-sm", "bg-cream/95");
      header.classList.remove("bg-cream/80");
    } else {
      header.classList.remove("shadow-sm", "bg-cream/95");
      header.classList.add("bg-cream/80");
    }
  });
}

/**
 * Inicializa os accordions interativos de Dúvidas Frequentes (FAQ)
 */
function initAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion-toggle");

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const contentId = btn.getAttribute("aria-controls");
      const content = document.getElementById(contentId);
      const icon = btn.querySelector(".accordion-icon");

      // Fecha todos os outros accordions para manter o layout limpo e focado
      accordionButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherContent = document.getElementById(otherBtn.getAttribute("aria-controls"));
          if (otherContent) {
            otherContent.classList.add("hidden");
          }
          const otherIcon = otherBtn.querySelector(".accordion-icon");
          if (otherIcon) {
            otherIcon.classList.remove("rotate-180");
          }
        }
      });

      // Alterna o estado do item clicado
      if (isExpanded) {
        btn.setAttribute("aria-expanded", "false");
        if (content) content.classList.add("hidden");
        if (icon) icon.classList.remove("rotate-180");
      } else {
        btn.setAttribute("aria-expanded", "true");
        if (content) content.classList.remove("hidden");
        if (icon) icon.classList.add("rotate-180");
      }
    });
  });
}

// Inicialização após o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppButtons();
  populateConfigPlaceholders();
  initMobileMenu();
  initHeaderScrollEffect();
  initAccordion();
});
