const hamburger = document.getElementById('hamburger')
const navItems = document.getElementById('bar')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navItems.classList.toggle('active')
})