let de = document.getElementById("d");
let me = document.getElementById("m");
let ye = document.getElementById("y");
let cury = new Date().getFullYear();
let curd= new Date().getDate()-1;
let curm = new Date().getMonth()+1;
let agee = document.getElementsByTagName("input")[0];
agee.addEventListener("input", () =>{
    let ageev = agee.value;
    let D = 29-ageev;
    let DD = D - curd;
    de.innerHTML = DD;
    console.log(curd);
})

let month = document.getElementsByTagName("input")[1];
month.addEventListener("input", () =>{
    let monthv = month.value;
    let F = monthv-curm;
    let FF = 12-F;
    me.innerHTML = FF;
})
let year = document.getElementsByTagName("input")[2];
year.addEventListener("input", () =>{
    let yearv = year.value;
    let rey = cury-yearv-1;
    ye.innerHTML = rey;
})


