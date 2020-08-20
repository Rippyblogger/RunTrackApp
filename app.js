
let add = document.getElementById("add");
let avgDistance = document.getElementById("avgDistance").value;
let weekDays = document.querySelector("#km-boxes-container");
let runArray = [];
let kmTotal = 0;



// Function to update individual list boxes with daily run
const addition =()=>{
    let runValue = document.getElementById("run").value;
    if (runValue === 0){
        return;
    }else{
    runArray.push(runValue);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(runValue));
    let ulList = document.getElementById("km-boxes-container").firstElementChild;
    weekDays.appendChild(li);
    ulList.remove();
    totaldistance();       
}

}

//Function to compute and update total distance run

function totaldistance(){
    
    kmTotal += Number(runArray.slice(-1)[0]);
    document.getElementById("total").innerHTML = kmTotal.toFixed(1);
    averagedist();
}


//Function to compute and update average distance

function averagedist(){
    let total = document.getElementById("total").innerHTML;
    let average = Number(total)/runArray.length
    document.getElementById("avgDistance").innerHTML = average.toFixed(1);

    highest();
}

function highest(){;
    document.getElementById("weekHigh").innerHTML = Math.max(...runArray)
}




add.addEventListener("click", addition);
console.log(runArray);