function CToF(temp) {
    let c = temp * 1.8;
    c = c + 32;
    return c;
}
function FToC(temp) {
    let f = temp - 32;
    f = f * .55;
    return f; 
}
function convertTemp() {
// let formData = new FormData(form);
//   console.log(Object.fromEntries(formData));
// let temp = formData.get("temp");
// let unit = formData.get("unit");
let temp = document.getElementById("temp").value;
let unit = document.getElementById("unit").value;
let newTemp;
if(unit == "ctf") {
newTemp = CToF(temp);
} else {
    newTemp = FToC(temp);
}
console.log(newTemp);
result.textContent = newTemp;
}

let button = document.getElementById("button");
let result = document.getElementById("result");
button.addEventListener("click", function (){convertTemp()});


