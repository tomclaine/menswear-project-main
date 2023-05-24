let result = document.querySelector(".magnifying");
let img = document.querySelector(".img-big img");

img.addEventListener('mousemove',function(e){
    result.classList.remove('hide');
    result.style.top = `${e.clientY}px`;
    result.style.left = `${e.clientX}px`;
    result.style.backgroundSize = `1500px 1500px`;
    let percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100;
    let percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100;

    result.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`;
    let src = this.getAttribute('src');
    result.style.backgroundImage = `url(${src})`;
})

img.addEventListener('mouseleave',()=> {
    result.classList.add('hide');
})

let amountElement = document.getElementById("amount");
let amount = amountElement.value;
console.log(amount);
let btnReduce = document.querySelector('.reduce-btn');
let btnIncrease = document.querySelector('.increase-btn');
let render = (amount)=>{
    amountElement.value = amount;
}
btnIncrease.addEventListener('click',()=>{
    amount++;
    render(amount);
})

btnReduce.addEventListener('click',()=>{
    if(amount>1){
        amount--;
        render(amount);
    }
})
amountElement.addEventListener('input',()=>{
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount)||amount==0)?1:amount;
    render(amount);
})



let alertCart = document.querySelector(".add-cart");
alertCart.addEventListener("click",function(e){
    alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công!");
    e.preventDefault();
})
