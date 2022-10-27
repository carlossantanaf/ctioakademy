export default function menuHeader() {
  const menu = document.querySelector('.header-menu');
  const headerConteudo = document.querySelector('.header-intro');
  const body = document.body;

  const menuTimer = setInterval(() => {
    if (headerConteudo.getBoundingClientRect().y < -50) {
      menu.style.backgroundColor = 'black';
      clearInterval(menuTimer);
    }
  }, 100);

  const open = document.querySelector('.open');
  const close = document.querySelector('.close');
  const menuR = document.querySelector('.header-menu-options');

  function openMenu() {
    setTimeout(() => {
      menuR.classList.add('ativo');
      open.classList.add('none');
      close.classList.add('initial');
    }, 200);
    open.style.opacity = 0;
    close.style.opacity = 1;
  }

  function closeMenu() {
    setTimeout(() => {
      menuR.classList.remove('ativo');
      close.classList.remove('initial');
      open.classList.remove('none');
    }, 200);
    close.style.opacity = 0;
    open.style.opacity = 1;
  }

  function closeTarget({ target }) {
    if (
      (target.classList.contains('menuR') ||
        target.classList.contains('close') ||
        target.classList.contains('open') ||
        target.classList.contains('header') ||
        target.classList.contains('bola') ||
        target.classList.contains('logo')) === false &&
      close.classList.contains('initial')
    ) {
      closeMenu();
    }
  }
  open.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  window.addEventListener('click', closeTarget);
}
