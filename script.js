// Obtém o caminho da página atual
const path = window.location.pathname;

// Seleciona todos os links no menu de navegação
const links = document.querySelectorAll('nav ul li a');

// Percorre os links e adiciona a classe "active" ao link correspondente à página atual
links.forEach(link => {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});
//Para fazer com que o conteúdo das <li> só apareça quando o mouse passar por cima




