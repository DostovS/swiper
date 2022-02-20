const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img')

let index = 0;

function changeImage() {
  if(index > img.length -1) {
    index = 0;
  } else if(index < 0) {
    index = img.length -1;
  }
  imgs.style.transform = `translateX(${-index * 500}px)`;
}
rightBtn.addEventListener('click', function change() {
  index++;
  resetInterval();
  changeImage()
});
leftBtn.addEventListener('click', function change() {
  index--;
  resetInterval();
  changeImage();
});
let interval = setInterval(run, 3000);
function run() {
  index++;
  changeImage();
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}