function main(){
    const sc = document.querySelector("#search-container");
    const ipt = document.querySelector("#ipt");
    const ci = document.querySelector("#cleaner-input");
    
    bgcolor(ipt, sc);

    clearInput(ipt, ci);
}

window.addEventListener("DOMContentLoaded", main);


function bgcolor(ipt, sc){
    ipt.addEventListener("focus", e => sc.style.backgroundColor = "rgb(79, 88, 99)");
    ipt.addEventListener("blur", e => sc.style.backgroundColor = "");
}

function clearInput(ipt, ci){
    ci.addEventListener("click", e => {
        ipt.value = "";
        ci.style.display = "none";
    });

    ipt.addEventListener("input", e => {
        ipt.value === "" ? ci.style.display = "none" : ci.style.display = "block";
    });
}
