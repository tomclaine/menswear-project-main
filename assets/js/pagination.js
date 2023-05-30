let thisPage = 1;
let limit = 8;
let lists = document.querySelectorAll(".list-product .card");

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    lists.forEach((item,key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    })
    listPage();
}
loadItem();

function listPage(){
    let count = Math.ceil(lists.length / limit);
    document.querySelector(".pagination ul").innerHTML = '';

    if(thisPage!=1){
        let prev = document.createElement('li');
        prev.innerText = "Trang trước";
        prev.setAttribute("onclick", "changePage("+(thisPage-1)+")");
        document.querySelector(".pagination ul").appendChild(prev);
    }

    for(let i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute("onclick", "changePage("+i+")");
        document.querySelector(".pagination ul").appendChild(newPage);
    }

    if(thisPage!=count){
        let next = document.createElement('li');
        next.innerText = "Trang sau";
        next.setAttribute("onclick", "changePage("+(thisPage+1)+")");
        document.querySelector(".pagination ul").appendChild(next);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}