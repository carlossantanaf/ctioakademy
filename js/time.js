export default function timeFrase() {
  const caixa = document.querySelectorAll('.timePessoas > div');
  const boxImage = document.querySelectorAll('.boxTime > img');
  const boxTexto = document.querySelectorAll('.boxTime > p');
  const nomeTime = document.querySelectorAll('.timePessoas > div > span');
  const boxTime = document.querySelectorAll('.boxTime');
  boxImage[0].classList.add('ativo');
  boxTime[0].classList.add('ativo');
  boxTexto[0].classList.add('ativo');
  nomeTime[0].classList.add('ativo');

  caixa.forEach((item, index) => {
    item.addEventListener('click', clickNaCaixa);
    function clickNaCaixa() {
      if (boxImage[index].classList.contains('ativo') === false) {
        boxImage.forEach((item, index) => {
          item.classList.remove('ativo');
          boxTime[index].classList.remove('ativo');
          boxTexto[index].classList.remove('ativo');
          nomeTime[index].classList.remove('ativo');
        });
        boxImage[index].classList.add('ativo');
        boxTime[index].classList.add('ativo');
        boxTexto[index].classList.add('ativo');
        nomeTime[index].classList.add('ativo');
      }
    }
  });
}
