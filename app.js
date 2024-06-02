let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const customAlert = document.querySelector(".alert");

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

// const gotWinner = () => {
//   for (let pattern of winPatterns) {
//     const mark = boxes[pattern[0]].innerHTML;
//     if (!mark) continue;
//     let isWinner = true;
//     for (let i of pattern) {
//       if (boxes[i].innerHTML != mark) isWinner = false;
//     }
//     if (isWinner) return true;
//   }
//   return false;
// };

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turn = !turn;
    box.disabled = true;


    checkWinner();
    // if (gotWinner()) {
    //     customAlert.innerHTML = `
    //         ${turn ? "X" : "O"} has won!!
    //     `
    //   customAlert.classList.add("show");
    //   setTimeout(() => {
    //     customAlert.classList.remove("show");
    //   }, 2000);
    // }
  });
});

const resetGame =() =>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const enableBoxes =()=>{
    for(let box of boxes){

        box.disabled = false;
        box.innerText = "";

    }
}

const disableBoxes =()=>{
    for(let box of boxes){

        box.disabled = true;

    }
}
const showWinner = (winner) =>{
    msg.innerText =`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner=() =>{
    for(let pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 != "")
            {
                if(pos1 == pos2 && pos2 == pos3)
                    {
                        console.log("Winner",pos1);
                        disableBoxes();
                        showWinner(pos1);
                    }
            }
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);