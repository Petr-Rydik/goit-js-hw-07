const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;


button.addEventListener('click', function (){
  const randomColor = '#' + Math.floor(Math.random() * 16777215)
  .toString(16);
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
