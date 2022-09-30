const acercaNosotrosContainer = document.querySelector('#acerca-nosotros');



window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let containerAcerca = acercaNosotrosContainer.scrollHeight;
    
    if(scrollY - 3000 > containerAcerca){
        acercaNosotrosContainer.classList.remove('hide-left');
    }else{
        acercaNosotrosContainer.classList.add('hide-left');
    }
});