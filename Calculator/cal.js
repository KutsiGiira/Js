var first = document.querySelector("#first");
var second = document.querySelector("#second");
var result = document.querySelector("span");
var divide = document.getElementsByTagName("button")[0];
var multiply = document.getElementsByTagName("button")[1];

var firstv;
var secondv;

divide.addEventListener("click", () => {
    firstv = first.value;
    secondv = second.value;
        if(secondv == 0){
        result.innerHTML = "Second number value can't be 0";
        }
        else{
            result.innerHTML = firstv + " / "  + secondv + " = " + parseFloat(firstv) / parseFloat(secondv);
        }
})
multiply.addEventListener("click", ()=>{
    firstv = first.value;
    secondv = second.value;
    result.innerHTML = firstv + " * "  + secondv + " = " + parseFloat(firstv)* parseFloat(secondv);
})

