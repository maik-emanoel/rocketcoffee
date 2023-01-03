const menuSection = document.querySelector('.menuSection')
const openMenuBtn = document.querySelector('.menuBtn')
const closeMenuBtn = document.querySelector('.closeMenuBtn')

// functions to open and to close menu
openMenuBtn.addEventListener('click', openMenu)

closeMenuBtn.addEventListener('click', function closeMenu() {
  menuSection.classList.remove('on')
  document.querySelector('body').style.overflow = 'initial'
})

function openMenu() {
  menuSection.classList.add('on')
  
  // putting overflow hidden on body
  if(menuSection.classList.contains('on')) {
  document.querySelector('body').style.overflow = 'hidden'
}
}