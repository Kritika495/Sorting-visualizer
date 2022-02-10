function swap(el1, el2)
{
let temp = el1.style.height;
el1.style.height = el2.style.height;
el2.style.height = temp;
}

async function bubble()
{
    const el = document.querySelectorAll(".bar");
    let i,j;
    let n = el.length;
    for(i=0; i<n-1; i++)
    {
        for(j=0; j<n-i-1; j++)
        {
            console.log("in jth loop");
            el[j].style.background = "red";
            await new Promise(resolve=>setTimeout(()=>{resolve(), delay(2)}));
            el[j+1].style.background = "red";
            if(parseInt(el[j].style.height) > parseInt(el[j+1].style.height))
            {
                await new Promise(resolve=>setTimeout(()=>{resolve(), delay(2)}));
            swap(el[j], el[j+1]);
            }
            el[j].style.background = "cyan";
            el[j+1].style.background = "cyan";

        }
        el[n-i-1].style.background = "lime";
    }
    el[0].style.background = 'lime';
}

const bsort = document.querySelector(".bubble-sort");
bsort.addEventListener("click",bubble);