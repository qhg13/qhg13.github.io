// 主题配置集中存放，便于按钮文案和实际 data-theme 保持一致。
const themes = [
  { name: "tech", label: "Theme: Tech" },
  { name: "morandi", label: "Theme: Morandi" }
];

const storageKey = "homepage-theme";
const rootElement = document.documentElement;
const toggleButtons = document.querySelectorAll("[data-theme-toggle]");
const scrollTopLinks = document.querySelectorAll("[data-scroll-top]");

function findTheme(themeName) {
  return themes.find((theme) => theme.name === themeName) || themes[0];
}

function readSavedTheme() {
  try {
    return localStorage.getItem(storageKey);
  } catch (error) {
    return null;
  }
}

function saveTheme(themeName) {
  try {
    localStorage.setItem(storageKey, themeName);
  } catch (error) {
    // 浏览器禁用本地存储时只影响记忆主题，不影响本次切换。
  }
}

function applyTheme(themeName) {
  const selectedTheme = findTheme(themeName);
  rootElement.dataset.theme = selectedTheme.name;
  toggleButtons.forEach((button) => {
    button.textContent = selectedTheme.label;
  });
}

function getNextThemeName() {
  const currentThemeName = rootElement.dataset.theme || themes[0].name;
  const currentIndex = themes.findIndex((theme) => theme.name === currentThemeName);
  const nextIndex = (currentIndex + 1) % themes.length;
  return themes[nextIndex].name;
}

applyTheme(readSavedTheme() || rootElement.dataset.theme);

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextThemeName = getNextThemeName();
    applyTheme(nextThemeName);
    saveTheme(nextThemeName);
  });
});

scrollTopLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  });
});
