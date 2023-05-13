//show/hide login and register
let btnShowLogins = document.querySelectorAll(".login");
console.log(btnShowLogins);
let loginArea = document.querySelector(".login-area");
let btnShowRegister = document.querySelector(".register");
let registerArea = document.querySelector(".register-area");
let changeLog = document.querySelector(".loginOnRegis");
let changeRegis = document.querySelector(".registerOnLog");
let closeLog = document.querySelector(".closeLog");
let closeRegis = document.querySelector(".closeRegis");

for(btnShowLogin of btnShowLogins){
        btnShowLogin.addEventListener("click",(e)=>{
        loginArea.style.transform = "translateX(0)";
        e.preventDefault();
    });
}

changeLog.addEventListener("click",(e)=>{
    loginArea.style.transform = "translateX(0)";
    registerArea.style.transform = "translateX(100%)";
    e.preventDefault();
});
changeRegis.addEventListener("click",(e)=>{
    registerArea.style.transform = "translateX(0)";
    loginArea.style.transform = "translateX(100%)";
    e.preventDefault();
})
btnShowRegister.addEventListener("click",(e)=>{
    registerArea.style.transform = "translateX(0)";
    e.preventDefault();
})
closeLog.addEventListener("click",()=>{
    loginArea.style.transform = "translateX(100%)";
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
closeRegis.addEventListener("click",()=>{
    registerArea.style.transform = "translateX(100%)";
});

//hide/show search area
let btnShowSearch = document.querySelector(".show-search-area");
let searchTopArea = document.querySelector(".searchTop-area");
let searchTop = document.querySelector(".searchTop");
btnShowSearch.addEventListener("click",(e)=>{
    searchTopArea.style.transform = "translateY(0)";
    e.preventDefault();
});
searchTopArea.addEventListener('click',()=>{
    searchTopArea.style.transform = "translateY(-100%)";
});
searchTop.addEventListener('click',(e)=>{
    e.stopPropagation();
})
// overlay.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("overlay")){
//         overlay.style.transform = "translateY(-100%)";
//     }
// })


//hide/show menu mobile
let btnShowMenuMobile = document.querySelector(".hamburger");
let menuMobile = document.querySelector(".menu-mobile");
let menuMobileArea = document.querySelector(".menu-mobile-area");
btnShowMenuMobile.addEventListener("click",(e)=>{
    menuMobileArea.style.transform = "translateX(0)";
    e.preventDefault();
});
menuMobileArea.addEventListener('click',()=>{
    menuMobileArea.style.transform = "translateX(-100%)";
});
menuMobile.addEventListener('click',(e)=>{
    e.stopPropagation();
})

//hide/show sub menu mobile
let dropMenuMobile = document.querySelector(".dropmenu-mobile");
let subMenuMobile = document.querySelector(".sub-menu-mobile");
dropMenuMobile.addEventListener("click",(e)=>{
    if(subMenuMobile.style.display == "block"){
        subMenuMobile.style.display = "none";
    }
    else{
        subMenuMobile.style.display = "block";
    }
    e.preventDefault();
});

//back top
let backTop = document.querySelector(".back-top");
console.log(backTop);
window.onscroll = function(){
    if(window.pageYOffset > 200){
        backTop.style.display = "block";
    }
    else{
        backTop.style.display = "none";
    }
};
backTop.addEventListener("click",()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//show/hide submenu sort
let btnShowSort = document.querySelector(".sort");
let subSort = document.querySelector(".sub-sort");

btnShowSort.addEventListener("click",()=>{
    if(subSort.style.visibility === "hidden"){
        subSort.style.visibility = "visible";
        subSort.style.opacity = "1";
    }
    else{
        subSort.style.visibility = "hidden";
        subSort.style.opacity = "0";
    }
    
})