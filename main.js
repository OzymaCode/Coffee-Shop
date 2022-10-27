let header = document.querySelector('header')
let navbar = document.querySelector('.navbar')
let searchInput = document.querySelector('.search-input')
let searchIcon = document.querySelector('.search-icon')

window.addEventListener('scroll', () => {
  let navbarOpen = navbar.classList.contains('active')
  let atScreenTop = window.scrollY > 0
  if (!navbarOpen) header.classList.toggle('shadow', atScreenTop)
})

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active')
  updateNavbar()
}

document.querySelector('#search-icon').onclick = () => {
  searchInput.classList.toggle('active')
  navbar.classList.remove('active')
  updateNavbar()
}

const updateNavbar = () => {
  let navbarOpen = navbar.classList.contains('active')
  let atScreenTop = window.scrollY <= 0
  if (navbarOpen) {
    header.classList.add('shadow')
    searchInput.classList.remove('active')
  } else if (!navbarOpen && atScreenTop) header.classList.remove('shadow')
}
