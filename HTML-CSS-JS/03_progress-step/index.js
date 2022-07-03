const progress = document.getElementsByClassName('progress')[0]
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// 定义一个标志位，记录当前的位置
let currentIndex = 1

next.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex > circles.length) {
    currentIndex = circles.length
  }
  update()
})
prev.addEventListener('click', () => {
  currentIndex--
  if (currentIndex < 1) {
    currentIndex = 1
  }
  update()
})
function update() {
  circles.forEach((item, index) => {
    if (index < currentIndex) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

  const avtives = document.querySelectorAll('.active')
  console.log(progress);
  console.log(progress.style);
  console.log(progress.style.width);


  progress.style.width = (avtives.length - 1) / (circles.length - 1) * 100 + '%'
  console.log(progress.style.width);

  if (currentIndex === 1) {
    prev.disabled = true
  } else if (currentIndex === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}