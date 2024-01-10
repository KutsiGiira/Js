var Log = document.querySelector("#Login");
var Sign = document.querySelector("#Signin");
var ndp = document.getElementsByClassName("Login")[0];
var stp = document.getElementsByClassName("first")[0];
var sub = document.querySelectorAll("button");
var np = document.querySelectorAll("#np");
var removed = document.getElementsByClassName("Signup");

Log.addEventListener("click", function(){
    stp.style.display = "none";
    ndp.style.display = "flex";

})

Sign.addEventListener("click", function(){
    stp.style.display = "flex";
    ndp.style.display = "none";

})
