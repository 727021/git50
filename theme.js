(() => {
  const getStoredTheme = () => localStorage.getItem('theme')

  const getAutoTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const getPreferredTheme = () => getStoredTheme() || 'auto'

  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme === 'auto' ? getAutoTheme() : theme)
    localStorage.setItem('theme', theme)
  }

  setTheme(getPreferredTheme())

  // TODO: Theme switcher
  window.setTheme = setTheme
})()
