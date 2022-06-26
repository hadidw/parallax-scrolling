let bg = document.getElementById('bg1');
let rock = document.getElementById('rock');
let girl = document.getElementById('girl');
let birds = document.getElementById('birds');
let title = document.getElementById('main-title');
let btn = document.getElementById('button');
let nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    birds.style.left = value*0.75+'px';
    bg.style.top = value*0.7+'px';
    title.style.marginRight=value*1+'px';
    btn.style.marginTop=value*0.2+'px';
    nav.style.top = value * 0.7 +'px';
})