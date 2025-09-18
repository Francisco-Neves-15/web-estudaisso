import { toggleHeader } from "./header.js";
import { toggleTheme } from "./theme.js";
import { toggleLang } from "./lang.js";

export function overlay_config(overlayE, type) {

}


document.addEventListener("DOMContentLoaded", () => {
  // Header
  toggleHeader("initial");

  // Theme
  toggleTheme("default", "initial")

  const btnToggleTheme = document.getElementById('btn-navbar-toggle-theme');
  btnToggleTheme.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    toggleTheme(newTheme, 'userSelect');
  });
  
  // Language
  toggleLang("default", "initial")
  const btnToggleLang = document.getElementById('btn-navbar-toggle-lang');
  btnToggleLang.addEventListener('click', () => {
    alert("Idiomas ainda não disponivel\nLanguages not yet available")
  });

});
