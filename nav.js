document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
  })
})
