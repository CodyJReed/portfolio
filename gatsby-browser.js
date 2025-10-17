import "./src/styles/global.css"

// Prevent flash of unstyled content (FOUC) for dark mode
export const onInitialClientRender = () => {
  // Get theme from localStorage or detect system preference
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}