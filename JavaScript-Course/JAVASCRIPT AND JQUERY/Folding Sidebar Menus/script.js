(function(){

    'use strict';

    const submenus = document.querySelectorAll('ul li ul');
    const menulink = document.querySelectorAll('.menulink');

    function hideSubmenus() {
        for(let i=0; i<submenus.length; i++){
            submenus[i].className = 'hide-menu';
        }
    }
    
    hideSubmenus();

    for(let i=0; i<menulink.length; i++){
        menulink[i].addEventListener('click', function(event) {
            event.preventDefault(); 
            const thisMenu = this.parentNode.querySelector('ul');
            // thisMenu.className = 'show-menu';
            if( thisMenu.classList.contains('hide-menu')){

                hideSubmenus();

                thisMenu.className = 'show-menu';
            }
            else{
                thisMenu.className = 'hide-menu';
            }
        });
    }
})();