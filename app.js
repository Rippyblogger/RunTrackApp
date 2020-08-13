let run = document.getElementById("run").value;

console.log(run);
let add = document.getElementById("add").value;
let total = document.getElementById("total").value;
let avgDistance = document.getElementById("avgDistance").value;
let weekHigh = document.getElementById("weekHigh").value;
let runArray = [];

const addition =(run)=>{
    runArray.push(run);

}



add.addEventListener("click", addition);
console.log(runArray);