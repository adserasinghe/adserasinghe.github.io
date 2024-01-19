$(document).ready(function(){
   $('.yearJS') .text(new Date().getFullYear());
});

window.addEventListener('DOMContentLoaded', (event)=>{
    document.querySelector('.yearJS').innerHTML=new Date().getFullYear();
})