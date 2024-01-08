var sub = document.getElementById("Submit");
var sec = document.getElementsByClassName("secpart")[0];
var frst = document.getElementsByClassName("first")[0];
var send = document.getElementById("back");
var rate = document.querySelectorAll(".value");
var rated = document.getElementById("number");

sub.addEventListener("click", () =>{
    sec.classList.remove("secpart");
    frst.style.display = "none";
})
send.addEventListener("click", () =>{
    sec.classList.add("secpart");
    frst.style.display = "block";
})

rate.forEach((vle) =>{
    vle.addEventListener("click", ()=> {
        rated.innerHTML = vle.innerHTML;
    })
})
