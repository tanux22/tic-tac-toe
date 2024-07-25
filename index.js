const boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebutton= document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerHTML = "0";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
}

const showwinner=(winner)=>{
    msg.innerHTML=`Congragulations, the winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winpatterns) {
        
           let pos1= boxes[pattern[0]].innerHTML;
           let pos2=boxes[pattern[1]].innerHTML;
           let pos3= boxes[pattern[2]].innerHTML;

           if(pos1!="" && pos2!="" && pos3!="")
           {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("winner",pos1);
                showwinner(pos1);
            }
           }

    }
};


newgamebutton.addEventListener("click",()=>{
    resetgame();
})

resetbtn.addEventListener("click",()=>{
    resetgame();
})

