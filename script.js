

let main = document.getElementById("main");

let groupsArray = [];


for ( let i = 0; i <= 7; i++) {

    let country = 0;
    
    groupsArray.push (

    `<div class="groups">

        <div class="groupTeams">
            <img class = "flags" src="./flags/${i}/${country + 1}.png"> 
            <p> ${groups[i].country_1} </p>

            <button id="g${i}_t1"  class="b1" value="${groups[i].country_1}"></button>

            <button id="g${i}_t1" class="b2" value="${groups[i].country_1}"></button>
        
        </div>

        <div class="groupTeams">
            <img class = "flags" src="./flags/${i}/${country + 2}.png"> 
            <p> ${groups[i].country_2} </p>

            <button id="g${i}_t2"  class="b1" value="${groups[i].country_2}"></button>

            <button id="g${i}_t2" class="b2" value="${groups[i].country_2}"></button>
        
        </div>

        <div class="groupTeams">
            <img class = "flags" src="./flags/${i}/${country + 3}.png"> 
            <p> ${groups[i].country_3} </p>

            <button id="g${i}_t3"  class="b1" value="${groups[i].country_3}"></button>

            <button id="g${i}_t3" class="b2" value="${groups[i].country_3}"></button>
        
        </div>

        <div class="groupTeams">
            <img class = "flags" src="./flags/${i}/${country + 4}.png"> 
            <p> ${groups[i].country_4} </p>

            <button id="g${i}_t4"  class="b1" value="${groups[i].country_4}"></button>

            <button id="g${i}_t4" class="b2" value="${groups[i].country_4}"></button>
        
        </div>

    </div>`
   )

   main.innerHTML = groupsArray.join('')

}

document.addEventListener('DOMContentLoaded', () =>{
    
        let x = document.querySelectorAll('.b1');
            x.forEach( (x) => {
                x.addEventListener('click', first)     
            })

        let y = document.querySelectorAll('.b2');
            y.forEach( (y) => {
                y.addEventListener('click', second)
            })

        let z = document.querySelectorAll('.roundOf16Cards');
            z.forEach( (z) => {
                z.addEventListener('click', toQuarterFinals)
            })

        let w = document.querySelectorAll('.qfTeams');
            w.forEach( (w) => {
                w.addEventListener('click', toSemiFinals)
            }) 
            
        let r = document.querySelectorAll('.sfTeams');
            r.forEach( (r) => {
                r.addEventListener('click', toFinal)
            })   
            
        let p = document.querySelectorAll('.finalists');
            p.forEach( (p) => {
                p.addEventListener('click', champion)
            }) 

    }
    )

   


