const menuItems = document.querySelectorAll('.nav a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    scrollToIdOnClick(event);

    addAndRemoveClass(item);
  });
});

function addAndRemoveClass(item) {
  const ativo = document.querySelector(".ativo");

  ativo.classList.remove("ativo");

  item.classList.add("ativo");

  const nav = document.querySelector(".navegation-mobile");
  const selecionado = document.querySelector(".center.selecionado");

  if (item) {
    nav.classList.remove("selecionado");
    selecionado.classList.remove("selecionado");
  }
}


const center = document.querySelector(".center");

center.addEventListener("click", () => {
  center.classList.toggle("selecionado");

  const selecionado = document.querySelector(".center.selecionado");
  const nav = document.querySelector(".navegation-mobile");

  if (selecionado) {
    nav.classList.toggle("selecionado");
  } else {
    nav.classList.remove("selecionado");
  }
});


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


let time = 3000,
    curretImageIndex = 0
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage(){

   images[curretImageIndex].classList.remove("selected")

    curretImageIndex++

    if(curretImageIndex >= max)
       curretImageIndex = 0

    images[curretImageIndex].classList.add("selected")
}

function start(){
    setInterval(() => {
    nextImage()
    }, time)
} 

window.addEventListener("load", start)
