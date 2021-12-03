/*Efeitos do botao de pesquisar aparecer e sumir ao clikar*/

let searchicon = document.querySelector('.searchicon');

document.querySelector('#search-btn').onclick = () => {
    searchicon.classList.toggle('active');
}