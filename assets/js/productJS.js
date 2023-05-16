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
});

//filter
let filterArea = document.querySelector(".filter-area");
let btnShowFilter = document.querySelector(".filter");
let btnCloseFilter = document.querySelector(".close-filter");
btnShowFilter.addEventListener('click',()=>{
    filterArea.style.transform = "translateX(0)";
});
btnCloseFilter.addEventListener('click',()=>{
    filterArea.style.transform = "translateX(-100%)";
});

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
    });

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
    });

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
    });

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
    });

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
    });