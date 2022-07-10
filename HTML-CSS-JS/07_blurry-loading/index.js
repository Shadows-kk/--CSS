const progress = document.querySelector('.progress')
const bg = document.querySelector('.bg')

let load = 0;
let init = setInterval(blurring, 30)

function blurring() {
  load++;
  if (load > 99) {
    clearTimeout(init)
  }
  progress.innerHTML = `${load}%`
  progress.style.opacity = scale(load, 100, 1)
  // console.log(scale(load, 100, 1));

  // progress.style.opacity = scale(load, 0, 100, 1, 0)
  // console.log(scale(load, 0, 100, 1, 0));

  bg.style.filter = `blur(${scale(load, 100, 30)}px)`
  // bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  // console.log(scale(load, 0, 100, 30, 0));
  // console.log(scale(load, 100, 30));

}
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }
const scale = (num, in_max, out_min) => {
  return out_min * (in_max - num) / in_max
}