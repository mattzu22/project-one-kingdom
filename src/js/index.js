// const letreiroWrapper = document.querySelector('.letreiro-wrapper');
// const letreiroTexto = document.querySelectorAll('.letreiro-texto');

// letreiroWrapper.addEventListener('animationiteration', function() {
//   letreiroTexto.forEach(texto => texto.classList.toggle('invertido'));
// });

const menuItems = document.querySelectorAll('.nav a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", ()=>{
    scrollToIdOnClick(event)

    addAndRemoveClass(item)
  });
});

function addAndRemoveClass(item){
  const ativo = document.querySelector(".ativo");
  
  ativo.classList.remove('ativo')

  item.classList.add('ativo')

  // const to = getScrollTopByHref(event.target);
  // const id = event.target.getAttribute("href");
  // const altura = document.querySelector(id).offsetTop;
  //  if (to == altura) {
  //   console.log('chegou');
  //  }
}

function scrollToIdOnClick(event) {
  event.preventDefault();

  const to = getScrollTopByHref(event.target) - 50;

  scrollToPosition(to);

}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to, 500);
}


function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

const center = document.querySelector(".center");

center.addEventListener("click", () => {
  center.classList.toggle("selecionado");
  console.log(center);

  const selecionado = document.querySelector(".center.selecionado");
  console.log(selecionado);
  const nav = document.querySelector(".navegation-mobile");
  console.log(nav);
  if (selecionado) {
    nav.classList.toggle("selecionado");
  } else {
    nav.classList.remove("selecionado");
  }
});
