var button = document.getElementById("button");
var span = document.getElementsByTagName("span")[0];    // [0] for the first span tag the compiler find
button.addEventListener("click", function(){
    span.innerHTML = Date();
})