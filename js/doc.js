
document.getElementById('botaojs').addEventListener('click', function() {
  var element = document.getElementById('imagens-ocultas');
  if (element.style.display === 'none') {
      element.style.display = 'block';
  } else {
      element.style.display = 'none';
  }
});

document.getElementById('botaojs').addEventListener('click', function() {
  var element = document.getElementById('imagens-ocultas');
  var textElement = document.getElementById('vermais');
  if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      textElement.textContent = "VER MENOS";
  } else {
      element.classList.add('hidden');
      textElement.textContent = "VER MAIS";
  }
});