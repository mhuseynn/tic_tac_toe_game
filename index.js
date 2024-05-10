
const btns = document.getElementsByClassName("buttons");
const btnsArray=Array.from(btns);
const board=document.getElementById("board");

let p=document.getElementById("p");

const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function ischeck(btnsArray)
{
    let index=0;
    for (let i = 0; i < winner.length; i++) 
    {
        if (btnsArray[winner[i][index]].innerText == "X" && btnsArray[winner[i][index+1]].innerText == "X" 
            && btnsArray[winner[i][index+2]].innerText == "X") 
        {
            return "X wins";
        }      
        else if (btnsArray[winner[i][index]].innerText == "O" && btnsArray[winner[i][index+1]].innerText == "O" 
        && btnsArray[winner[i][index+2]].innerText == "O")
        {
            return "O wins";
        }
    }
    return "You're tied"; 
}


let check=true;

btnsArray.map(item => {
    item.addEventListener("click",()=>
    {
        if(check)
        {
             item.innerText="X";
             check=false;
        }
        else
        {
            item.innerText="O";
            check=true;
        }
        p.innerText=ischeck(btnsArray); 
    });
});
    




