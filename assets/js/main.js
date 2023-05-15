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
    if(subSort.style.visibility == "visible"){
        subSort.style.visibility = "hidden";
        subSort.style.opacity = "0";
    }
    else{
        subSort.style.visibility = "visible";
        subSort.style.opacity = "1";
    }
})

//filter
let filterArea = document.querySelector(".filter-area");
let btnShowFilter = document.querySelector(".filter");
let btnCloseFilter = document.querySelector(".close-filter");
btnShowFilter.addEventListener('click',()=>{
    filterArea.style.transform = "translateX(0)";
});
btnCloseFilter.addEventListener('click',()=>{
    filterArea.style.transform = "translateX(-100%)";
})

    //dropdown list product
    let changeChevron1 = document.querySelector(".drop-product>i");
    let dropProduct = document.querySelector(".drop-product");
    let subProduct = document.querySelector(".sub-product");
    dropProduct.addEventListener("click",(e)=>{
        if(subProduct.style.display == "block"){
            subProduct.style.display = "none";
            changeChevron1.setAttribute("class","fa-solid fa-chevron-down")
        }
        else{
            subProduct.style.display = "block"
            changeChevron1.setAttribute("class","fa-solid fa-chevron-up")
        }
        e.preventDefault();
    })

    //dropdown list form
    let changeChevron2 = document.querySelector(".drop-form>i");
    let dropForm = document.querySelector(".drop-form");
    let subForm = document.querySelector(".sub-form");
    dropForm.addEventListener("click",(e)=>{
        if(subForm.style.display == "block"){
            subForm.style.display = "none";
            changeChevron2.setAttribute("class","fa-solid fa-chevron-down")
        }
        else{
            subForm.style.display = "block"
            changeChevron2.setAttribute("class","fa-solid fa-chevron-up")
        }
        e.preventDefault();
    })

    //dropdown list size
    let changeChevron3 = document.querySelector(".drop-size>i");
    let dropSize = document.querySelector(".drop-size");
    let subSize = document.querySelector(".sub-size");
    dropSize.addEventListener("click",(e)=>{
        if(subSize.style.display == "block"){
            subSize.style.display = "none";
            changeChevron3.setAttribute("class","fa-solid fa-chevron-down")
        }
        else{
            subSize.style.display = "block"
            changeChevron3.setAttribute("class","fa-solid fa-chevron-up")
        }
        e.preventDefault(); 
    })

    //dropdown list color
    let changeChevron4 = document.querySelector(".drop-color>i");
    let dropColor = document.querySelector(".drop-color");
    let subColor = document.querySelector(".sub-color");
    dropColor.addEventListener("click",(e)=>{
        if(subColor.style.display == "block"){
            subColor.style.display = "none";
            changeChevron4.setAttribute("class","fa-solid fa-chevron-down")
        }
        else{
            subColor.style.display = "block"
            changeChevron4.setAttribute("class","fa-solid fa-chevron-up")
        }
        e.preventDefault(); 
    })

    //dropdown price range
    let changeChevron5 = document.querySelector(".drop-price-range>i");
    let dropPriceRange = document.querySelector(".drop-price-range");
    let subPriceRange = document.querySelector(".sub-price-range");
    dropPriceRange.addEventListener("click",(e)=>{
        if(subPriceRange.style.display == "block"){
            subPriceRange.style.display = "none";
            changeChevron5.setAttribute("class","fa-solid fa-chevron-down")
        }
        else{
            subPriceRange.style.display = "block"
            changeChevron5.setAttribute("class","fa-solid fa-chevron-up")
        }
        e.preventDefault(); 
    })
    
