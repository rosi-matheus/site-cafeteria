let manuMobile = document.querySelector('.menu img');
let menuList = document.querySelector('.menu ul');
let setaParaCima = document.querySelector('#seta-topo');

function toggleMenuMobile(){
    menuList.classList.toggle('menu-ativo');
}

function voltarAoTopo(){
    if(document.documentElement.scrollTop !== 0){
        setaParaCima.style.display = 'block';
    }else{
        setaParaCima.style.display = 'none';
    }
}

// Abrir ou fechar o menu no mobile
manuMobile.addEventListener('click', toggleMenuMobile);
window.addEventListener('scroll', voltarAoTopo);