let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let clickCount=0;

let turnO=true;
let gameEnded = false;
let winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
const resetGame=()=>{
  clickCount=0;
  draw.innerText="";
  msg.innerText=="";
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide")

}
boxes.forEach((box) =>{

  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X"
      turnO=true;
    }
    
  
    box.disabled=true
    clickCount++ ;
    checkWinner();
    checkDraw();
  }
  )
})
const disableBoxes=()=>{
  boxes.forEach((box)=>{
    box.disabled=true;
  })
}
const enableBoxes=()=>{
  boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText="";
  })
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations,Winner is ${winner}`
  disableBoxes();
  msgContainer.classList.remove("hide");
}
const checkDraw=()=>{
  if (clickCount===9 &&   msg.innerText==="") {
    let draw=document.getElementById("draw");
    draw.innerText="The Game is Drawn";
    console.log("draw");
    
  }

}
const checkWinner=()=>{

  for (let pattern of winPatterns) {
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if (pos1Val !="" && pos2Val !="" &&       pos3Val!="") {
      if (pos1Val===pos2Val &&pos2Val===pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

