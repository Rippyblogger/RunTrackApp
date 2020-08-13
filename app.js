let runValue = document.getElementById("run").value;
let run = document.querySelector('#run');

console.log(run);
let add = document.getElementById("add");
let total = document.getElementById("total").value;
let avgDistance = document.getElementById("avgDistance").value;
let weekHigh = document.getElementById("weekHigh").value;
let weekDays = document.querySelectorAll("#km-boxes-container li");
let runArray = new Array(7);

console.log(runArray);
const addition =(run)=>{
    runArray.push(runValue);
    //console.log(runArray);

    for(let i = 0; i<=weekDays.length; i++){
        console.log(runArray[runArray.length-i]);
        //console.log(weekDays[i].innerHTML)
        // let i = 1;
        // weekDay = drum[drum.length - 2];



        //console.log(weekDay.value)
    }
}



add.addEventListener("click", addition);


