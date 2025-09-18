const AVAILABLE_LANGUAGES = {
  "pt-BR": "../lang/pt-BR",
  "en-US": "../lang/en-US",
  "fr-FR": "../lang/fr-FR",
}

const FALLBACK_LANG = "en-US"

export function toggleLang(lang, type) {
  const html = document.documentElement;
  const LS_KEY = 'user-lang';

  console.log(`LOG: *func: ToggleLang | LS: ${localStorage.getItem(LS_KEY)}`);

  // Apply the lang
  function applyLang(langToApply) {
    console.log(`LOG: *func: ApplyLang | LA: ${langToApply}`);
    html.setAttribute('lang', langToApply);
  }

  // Detecte browser lang
  function detectSystemLang() {
    let deviceLang = navigator.languages[0] || navigator.language
        
    if (AVAILABLE_LANGUAGES[deviceLang]) {
      return deviceLang
    } else {
      console.log(`WARN: *func: DetectSystemLang | Lang: ${deviceLang} not available.`);
    }

    // fallback
    console.log(`WARN: *func: DetectSystemLang | Using: ${FALLBACK_LANG} lang.`);
    return FALLBACK_LANG
  }

  // Choice the lang based on the LS save and the type
  function determineLang() {
    const saved = localStorage.getItem(LS_KEY) || '';

    // If inicial
    // - Search the lang in the options, if has return
    // -- In case not, search the lang system
    // -- If is not save, save in LS device or null
    if (type === 'initial') {
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      const systemLang = detectSystemLang();
      if (!saved) localStorage.setItem(LS_KEY, 'device');
      return systemLang;
    }

    // If user choice
    // - If user select 'device', set on LS 'device';
    // - Else this, Save immediately on LS;
    if (type === 'userSelect') {
      if (lang === 'device') {
        localStorage.setItem(LS_KEY, 'device');
        return detectSystemLang();
      }
      localStorage.setItem(LS_KEY, lang);
      return lang;
    }

    // fallback
    return detectSystemLang(); 
  }

  // Aplly the final lang
  const finalLang = determineLang();
  applyLang(finalLang);
}
