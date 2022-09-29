function toggleNav(){
    
    let aside= document.getElementById('aside');

    aside.classList.toggle('aside--active');
}

let li = document.getElementById ('navToggleButton');
li.addEventListener('click',toggleNav);