const newArray = document.querySelector("#new-array");
const barContainer= document.querySelector(".flex-container");

newArray.addEventListener("click",createNewArray);

function createNewArray(){
    let noOfBars=60
    deleteChild();
    let array=[];
    for(let i=0;i<noOfBars;i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    for(let i=0;i<noOfBars;i++){
        const bar=document.createElement("div");
        bar.style.height=`${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        barContainer.appendChild(bar);
    }
}

function deleteChild(){
    barContainer.innerHTML="";
}