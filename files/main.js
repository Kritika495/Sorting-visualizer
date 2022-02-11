const newArray = document.querySelector("#new-array");
const barContainer= document.querySelector(".flex-container");

newArray.addEventListener("click",()=>createNewArray(arraySize.value));

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_sz');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;
let delayElement = document.querySelector('#speed_input');
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


function createNewArray(noOfBars=60){
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