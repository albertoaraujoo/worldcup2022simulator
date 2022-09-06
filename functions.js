function first (e) {

    let getIdNumber = parseInt(e.target.id.substring(1,2));

    roundOf16Positions[getIdNumber].t1 = e.target.value;
    roundOf16Positions[getIdNumber].t1Flag = `<img class="flags" src="./flagsName/${getIdNumber}/${e.target.value}.png">`
    
    let firstPosition = document.getElementById(`16_g${getIdNumber}t1`);

    firstPosition.innerHTML = roundOf16Positions[getIdNumber].t1Flag +  roundOf16Positions[getIdNumber].t1 
      
}

function second (e) {

    let getIdNumber = parseInt(e.target.id.substring(1,2));

    roundOf16Positions[getIdNumber].t2 = e.target.value;
    roundOf16Positions[getIdNumber].t2Flag = `<img class="flags" src="./flagsName/${getIdNumber}/${e.target.value}.png">`
    
    let firstPosition = document.getElementById(`16_g${getIdNumber}t2`);

    firstPosition.innerHTML = roundOf16Positions[getIdNumber].t2Flag + roundOf16Positions[getIdNumber].t2 
     
}

function toQuarterFinals (e) {

    let getClassNumber = parseInt(e.target.className.substring(5, 6));

    document.getElementById(`qF-g${getClassNumber}`).innerHTML =
    e.target.innerHTML

}

function toSemiFinals (e) {

    let getClassNumber = parseInt(e.target.className.substring(4, 5));
    document.getElementById(`sf-t${getClassNumber}`).innerHTML =
    e.target.innerHTML

}

function toFinal (e) {
    let getClassNumber = parseInt(e.target.className.substring(4, 5)); 

    document.getElementById(`f-t${getClassNumber}`).innerHTML =
    e.target.innerHTML
}

function champion (e) {
    document.getElementById('champion').innerHTML = `Champion: ${e.target.innerHTML}`
}









