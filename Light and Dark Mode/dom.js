var btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("h2").style.color = "black";
    document.querySelector(".container").style.borderColor = "black";
    document.querySelector("h2").innerHTML = "Ligt Mode";
    document.querySelector(".text").style.color = "black";
    document.querySelector(".top").style.borderBottomColor = "black";
    document.querySelector(".text").style.borderColor = "black";   
})

alert("Click the button at End Rigt for light mode");
