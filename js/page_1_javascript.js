function main(){
    const ipt = document.querySelector("#q");
    const is = document.querySelector("#input-search");
    const frm = document.querySelector("#frm");

    bgcolor(ipt, is);
    
    submitForm(ipt, frm);
}

window.addEventListener("DOMContentLoaded", main);


function bgcolor(ipt, sc){
    ipt.addEventListener("focus", e => sc.style.backgroundColor = "rgb(79, 88, 99)");
    ipt.addEventListener("blur", e => sc.style.backgroundColor = "");
}


function submitForm(ipt, frm){
    frm.addEventListener("submit", e => {
        if (ipt.value === "") e.preventDefault();
    });
}