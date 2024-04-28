let pl = document.querySelector(".play");
let curr = "light";
pl.addEventListener("click", () => {
  let body = document.querySelector("body");
  if (curr == "light") {
    curr = "dark";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    document.querySelector(".head").style.cssText =
      "background-color:white; color:black;";
    document.querySelector(".res").style.cssText =
      "background-color:white; color:black;";
    document.querySelector("#icon").style.color = "black";
  } else {
    curr = "light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    document.querySelector(".head").style.cssText =
      "background-color:black; color:white;";
    document.querySelector(".res").style.cssText =
      "background-color:black; color:white;";
    document.querySelector("#icon").style.color = "white";
  }
});

let set = ["rock", "paper", "scissors"];
let calc = Math.floor(Math.random() * set.length);
let you = "";
const res = document.querySelector(".resultant");
let result = document.querySelector(".res");
let move1 = document.querySelector(".rock");
let move2 = document.querySelector(".paper");
let move3 = document.querySelector(".scissors");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let compscore = 0;
let userscore = 0;
move1.addEventListener("click", () => {
  calc = Math.floor(Math.random() * set.length);
  you = "rock";
  if (calc == 0) {
    res.innerText = "Its a Draw";
    result.style.cssText = "background-color:black";
  } else if (calc == 1) {
    res.innerText = "You lost paper beats rock";
    result.style.cssText = "background-color:red";
    compscore++;
    score2.innerText = compscore;
  } else {
    res.innerText = "You won rock beats scissors";
    result.style.cssText = "background-color:green";
    userscore++;
    score1.innerText = userscore;
  }
});

move2.addEventListener("click", () => {
  calc = Math.floor(Math.random() * set.length);
  you = "paper";
  if (calc == 1) {
    res.innerText = "Its a Draw";
    result.style.cssText = "background-color:black";
  } else if (calc == 2) {
    res.innerText = "You lost scissors beats paper";
    result.style.cssText = "background-color:red";
    compscore++;
    score2.innerText = compscore;
  } else {
    res.innerText = "You won paper beats rock";
    result.style.cssText = "background-color:green";
    userscore++;
    score1.innerText = userscore;
  }
});

move3.addEventListener("click", () => {
  calc = Math.floor(Math.random() * set.length);
  you = "scissors";
  if (calc == 2) {
    res.innerText = "Its a Draw";
    result.style.cssText = "background-color:black";
  } else if (calc == 0) {
    res.innerText = "You lost rock beats scissors";
    result.style.cssText = "background-color:red";
    compscore++;
    score2.innerText = compscore;
  } else {
    res.innerText = "You won scissors beats paper";
    result.style.cssText = "background-color:green";
    userscore++;
    score1.innerText = userscore;
  }
});
console.log(sc1);
