import { toggleHeader } from "./header.js";
import { toggleTheme } from "./theme.js";
import { toggleLang } from "./lang.js";

import { genTruhTable, applyRegex_inputs, setInputHightlighs } from "./features/truthtabletrainer.js";

export function overlay_config(overlayE, type) {

  if (type === "initial") {
    overlayE.addEventListener("click", () => { toggleHeader("close") });
  }

  if (!overlayE) {
    console.error("**ERROR**: Overlay not find;")
  };

  if (type === "open") {
    overlayE.classList.add("show");
    overlayE.removeAttribute("inert", "");
  } else if (type === "close") {
    overlayE.classList.remove("show");
    overlayE.setAttribute("inert", "true");
  } else {
    return
  }

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

  // Generate TruthTable
  genTruhTable("initial")

  // Valid all inputs
  applyRegex_inputs()

  // Highlighs on Inputs
  setInputHightlighs()

});
