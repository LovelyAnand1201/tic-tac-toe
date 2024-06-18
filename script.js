let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".btn");
let turn = 'x';
let count = 0;
let winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2,5,8], 
            [0, 4, 8], [2, 4, 6]];
let player1 = prompt("enter player 1 name");
let player2 = prompt("enter player 2 name");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn == 'x'){
            box.innerText = "X";
            turn = 'o';

        }else{
            box.innerText = "O";
            turn = 'x';
        }
        box.disabled = true;
        count++;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let win of winner) {
        let a = boxes[win[0]].innerText;
        let b = boxes[win[1]].innerText;
        let c = boxes[win[2]].innerText;
        // console.log(a, b, c);
        if(a != "" && b != "" && c != ""){
            if(a == b && b == c){
                // console.log("winner");
                let win = a;
                if(a=="X" && player1!=null) win = player1;
                else if(player2!=null) win = player2;
                msg.innerText = "GAME OVER Winner is " + win;
                count = 0;
                msg.classList.remove("hide");
                boxes.forEach((box) => {
                    box.disabled = true;                   
                });
            }
        }
        if(count == 9){
            msg.innerText = "GAME OVER";
            msg.classList.remove("hide");
            count = 0;
        }
    }
}

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;    
        box.innerText = ""; 
        msg.classList.add("hide");
        turn = "x";    
        count = 0;    
    });
})

function newplayer() {
    player1 = prompt("enter player 1 name");
    player2 = prompt("enter player 2 name");   
}