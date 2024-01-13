function remode(){
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h2").style.color = "white";
    document.querySelector(".container").style.borderColor = "white";
    document.querySelector("h2").innerHTML = "Dark Mode";
    document.querySelector(".text").style.color = "white";
    document.querySelector(".top").style.borderBottomColor = "white";
    document.querySelector(".text").style.borderColor = "white";
    document.querySelector("#black").style.display = "none";
    document.querySelector("#white").style.display = "block"; 
}


function mode(){
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h2").style.color = "black";
        document.querySelector(".container").style.borderColor = "black";
        document.querySelector("h2").innerHTML = "Ligt Mode";
        document.querySelector(".text").style.color = "black";
        document.querySelector(".top").style.borderBottomColor = "black";
        document.querySelector(".text").style.borderColor = "black";
        document.querySelector("#black").style.display = "block";
        document.querySelector("#white").style.display = "none";     
     
}