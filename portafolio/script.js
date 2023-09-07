fetch('../calculator/index.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('calculadora').innerHTML = data;
  });