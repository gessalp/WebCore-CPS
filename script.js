function readMore() {
    var more = document.getElementById("hiddenText");
    var btn = document.getElementById("btn");
    if (more.style.display == "none") {
        more.style.display = "flex"; 
        btn.innerHTML = "Скрыть"; 
    } else {
        more.style.display = "none";
        btn.innerHTML = "Читать далее"; 
    }
}