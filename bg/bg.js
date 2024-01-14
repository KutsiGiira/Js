var left = document.querySelector("#st");
var right = document.querySelector("#sec");

function inpv(){
    document.querySelector(".value").innerHTML = "linear-gradient (to right, " + left.value + " and " + right.value + ")";
    document.querySelector(".bg").style.background = "linear-gradient(to right," + left.value + "," + right.value +")";
}

