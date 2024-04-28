//Mode
let mode = document.querySelector("#icon");
let body = document.querySelector("body");
head = document.querySelector(".head");
box = document.querySelectorAll(".box");
reset = document.querySelector(".reset");
winner = document.querySelector(".winner");

const dark = () => {
  body.style.cssText = "background-color:black; color:white";
  head.style.backgroundColor = "silver";
  reset.style.backgroundColor = "silver";
  winner.style.color = "white";
  box.forEach((div) => {
    div.style.backgroundColor = "darkslategray";
    div.style.color = "white";
  });
};
const light = () => {
  body.style.cssText = "background-color:white; color:black";
  head.style.backgroundColor = "gold";
  reset.style.backgroundColor = "gold";
  winner.style.color = "black";
  box.forEach((div) => {
    div.style.backgroundColor = "lightblue";
    div.style.color = "black";
  });
};
let curr = "light";
mode.addEventListener("click", () => {
  if (curr == "light") {
    curr = "dark";
    dark();
  } else {
    curr = "light";
    light();
  }
});

//Game logic

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disable = () => {
  for (div of box) {
    div.disabled = true;
  }
  reset.innerText = "New Game";
};
const enable = () => {
  for (div of box) {
    div.disabled = false;
    div.innerText = "";
  }
};
const draw = () => {
  click++;
  if (click == 9) {
    winner.innertext = "Its a Draw";
  }
};

const checkwin = () => {
  for (let pattern of winpattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        winner.innerText = `Player ${pos1} wins`;
        disable();
      }
      draw();
    }
  }
};
let click = 0;
let turn = true;
box.forEach((div) => {
  div.addEventListener("click", () => {
    if (turn) {
      div.innerText = "X";
      turn = false;
    } else {
      div.innerText = "O";
      turn = true;
    }
    div.disabled = true;
    checkwin();
  });
});

reset.addEventListener("click", () => {
  winner.innerText = "";
  enable();
  reset.innerText = "Reset Game";
  click = 0;
});
