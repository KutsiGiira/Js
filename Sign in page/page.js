var button = document.querySelector("#inp");
var inp = document.querySelectorAll("#value");
var eor = document.querySelectorAll("#value");
button.addEventListener("click", ()=>{
    inp.forEach(input => {
        if(input.value.lenght > 0)
        {
            console.log("chekcked");
        }
        else{
            console.log("no");
        }
    });
})
