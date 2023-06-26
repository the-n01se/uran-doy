
document.getElementById('burger-menu').addEventListener('click', () => {
  document.querySelector('.menu__list').classList.toggle('open');
  document.body.classList.toggle("disable-scrolling");
})
document.getElementById('menu__list').addEventListener('click', function () {
  document.querySelector('.menu__list').classList.remove("open");
  document.body.classList.remove("disable-scrolling");
})
