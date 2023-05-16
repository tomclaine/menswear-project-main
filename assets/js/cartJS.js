//show/hide popup in cart page
let btnShowPopUp = document.querySelector(".show-popUp");
let chooseSizeDrop = document.querySelector(".chooseSize-drop");
let closePopUp = document.querySelector(".closePopup");

btnShowPopUp.addEventListener('click',()=>{
    chooseSizeDrop.style.visibility = "visible";
    chooseSizeDrop.style.opacity = "1";
})

closePopUp.addEventListener('click',()=>{
    chooseSizeDrop.style.visibility = "hidden";
    chooseSizeDrop.style.opacity = "0";    
})




