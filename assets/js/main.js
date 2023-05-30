//show/hide login and register
let btnShowLogins = document.querySelectorAll(".login");
let loginArea = document.querySelector(".login-area");
let btnShowRegisters = document.querySelectorAll(".register");
let registerArea = document.querySelector(".register-area");
let changeLog = document.querySelector(".loginOnRegis");
let changeRegis = document.querySelector(".registerOnLog");
let closeLog = document.querySelector(".closeLog");
let closeRegis = document.querySelector(".closeRegis");
let pwdShowHide = document.querySelectorAll(".pw-hide");


pwdShowHide.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash","fa-eye");
        }
        else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye","fa-eye-slash");
        }
    })   
})

for(btnShowLogin of btnShowLogins){
    btnShowLogin.addEventListener("click",(e)=>{
    loginArea.style.transform = "translateX(0)";
    registerArea.style.transform = "translateX(100%)";
    e.preventDefault();
    });
}
for(btnShowRegister of btnShowRegisters){
    btnShowRegister.addEventListener("click",(e)=>{
    registerArea.style.transform = "translateX(0)";
    loginArea.style.transform = "translateX(100%)";
    e.preventDefault();
});
};

changeLog.addEventListener("click",(e)=>{
    loginArea.style.transform = "translateX(0)";
    registerArea.style.transform = "translateX(100%)";
    e.preventDefault();
});
changeRegis.addEventListener("click",(e)=>{
    registerArea.style.transform = "translateX(0)";
    loginArea.style.transform = "translateX(100%)";
    e.preventDefault();
});

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
});

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
});

//hide/show sub menu mobile
let dropMenuMobile = document.querySelector(".btn-dropmenu");
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


//login/register in localstorage
//register
let inputNameRegis = document.querySelector(".input-regis-name");
let inputUsernameRegis = document.querySelector(".input-regis-username");
let inputPassRegis = document.querySelector(".input-regis-pass");
let btnRegister = document.querySelector(".btn-register");

btnRegister.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputNameRegis.value==""||inputUsernameRegis.value==""||inputPassRegis.value==""){
        alert("Vui lòng nhập đầy đủ thông tin");
    }
    else{
        const user = {
            username: inputUsernameRegis.value,
            password: inputPassRegis.value,
            name: inputNameRegis.value
        }
        let json = JSON.stringify(user);
        localStorage.setItem(inputUsernameRegis.value,json);
        alert("Đăng ký thành công!");
        loginArea.style.transform = "translateX(0)";
        registerArea.style.transform = "translateX(100%)";
    }
})


//login
let inputUsernameLogin = document.querySelector(".input-log-username");
let inputPassLogin = document.querySelector(".input-log-pass");
let btnLogin = document.querySelector(".btn-login");
let logRegisArea = document.querySelector(".log-regis-area");
let hiCustomer = document.querySelector(".hi-customer");
let nameCustomer = document.querySelector(".name-customer");
let logOut = document.querySelector(".log-out");

btnLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputUsernameLogin==""||inputPassLogin==""){
        alert("Vui lòng nhập đầy đủ thông tin")
    }else{
        const user = JSON.parse(localStorage.getItem(inputUsernameLogin.value))
        if(user.username===inputUsernameLogin.value && user.password===inputPassLogin.value){
            alert("Đăng nhập thành công!");
            loginArea.style.transform = "translateX(100%)";
            logRegisArea.style.display = "none";
            hiCustomer.style.display = "block";
            nameCustomer.innerText = user.name;
        }
        else{
            alert("Đăng nhập thất bại!");
        }
    }
})
logOut.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Bạn đã đăng xuất tài khoản thành viên!");
    logRegisArea.style.display = "block";
    hiCustomer.style.display = "none";
})








    
