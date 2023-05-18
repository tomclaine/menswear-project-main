let result = document.querySelector(".magnifying");
let img = document.querySelector(".img-big");

img.addEventListener('mousemove',(e)=>{
    result.style.top = `${e.clientY}px`;
    result.style.left = `${e.clientX}px`;
})