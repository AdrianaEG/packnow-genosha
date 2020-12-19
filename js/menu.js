let $btnMenu = document.querySelector('#drop-menu');
let $menuOptions = document.querySelector('.menu-options');

const eventBtn = (e)=>{
    e.preventDefault();
    $menuOptions.classList.toggle('ver');
    if($menuOptions.classList.contains('ver')){
        document.querySelector('main').style.display='none';
    }
    else{
        document.querySelector('main').style.display='block';
    }
}

$btnMenu.addEventListener('click', eventBtn);