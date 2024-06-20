// const dsd = document.getElementById('imagens-ocultas');

// botao.addEventListener('click', mostrarEsconderImagem);
// function mostrarEsconderImagem() {
//     if (imagens-ocultas.style.display === 'none') {
//       minhaImagem.style.display = 'block';
//     } else {
//       minhaImagem.style.display = 'none';
//     }
//   }
document.getElementById('botaojs').addEventListener('click', function() {
  var element = document.getElementById('imagens-ocultas');
  if (element.style.display === 'none') {
      element.style.display = 'block';
  } else {
      element.style.display = 'none';
  }
});