const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const search = document.querySelector('.search')

btn.addEventListener('click', () => {
  input.classList.toggle('active')
})