const botaoMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', function mostraMenu() {
    menuLateral.classList.toggle('menu-lateral-ativo')
});
