const letreiroWrapper = document.querySelector('.letreiro-wrapper');
const letreiroTexto = document.querySelectorAll('.letreiro-texto');

letreiroWrapper.addEventListener('animationiteration', function() {
  letreiroTexto.forEach(texto => texto.classList.toggle('invertido'));
});
