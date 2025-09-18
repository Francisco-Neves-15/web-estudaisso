export function toggleTheme(theme, type) {
  const html = document.documentElement;
  const linkTheme = document.getElementById('link-theme');
  const LS_KEY = 'user-theme';

  console.log(`LOG: *func: ToggleTheme | LS: ${localStorage.getItem(LS_KEY)}`);

  // Apply the theme
  function applyTheme(themeToApply) {
    console.log(`LOG: *func: ApplyTheme | TH: ${themeToApply}`);
    html.setAttribute('data-theme', themeToApply);
    linkTheme.href = `styles/theme/theme-${themeToApply}.css`;
  }

  // Detecte browser theme
  function detectSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Choice the theme based on the LS save and the type
  function determineTheme() {
    const saved = localStorage.getItem(LS_KEY) || '';

    // If inicial
    // - Search the theme in the options, if has return
    // -- In case not, search the theme system
    // -- If is not save, save in LS device or null
    if (type === 'initial') {
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      const systemTheme = detectSystemTheme();
      if (!saved) localStorage.setItem(LS_KEY, 'device');
      return systemTheme;
    }

    // If user choice
    // - If user select 'device', set on LS 'device';
    // - Else this, Save immediately on LS;
    if (type === 'userSelect') {
      if (theme === 'device') {
        localStorage.setItem(LS_KEY, 'device');
        return detectSystemTheme();
      }
      localStorage.setItem(LS_KEY, theme);
      return theme;
    }

    // fallback
    return detectSystemTheme(); 
  }

  // Aplly the final theme
  const finalTheme = determineTheme();
  applyTheme(finalTheme);
}
