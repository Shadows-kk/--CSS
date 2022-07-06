const list = document.querySelectorAll('li')
const toggle = document.querySelector('.toggle')
const navgation = document.querySelector('.navgation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navgation.classList.toggle('active')
})

list.forEach((item) => {
  item.addEventListener('click', () => {
    removeClass()
    item.classList.add('active')
  })
})
function removeClass() {
  list.forEach(item => {
    item.classList.remove('active')
  })
}