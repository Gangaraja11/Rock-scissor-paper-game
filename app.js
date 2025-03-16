let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");           //stp 1
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        console.log("choice was clicked");
    });
}); 

const genCompChoice = () => {                           //stp 4
    const option = ["rock","paper","scessor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw, paly again....!";
    msg.style.backgroundColor  = "black";
};

const showWinner = (userwin,userChoice,compChoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = ` you win.your  ${userChoice} beats ${compChoice} !`;
        msg.style.backgroundColor  = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = ` you lose. ${compChoice} beats ${userChoice} !`;
        msg.style.backgroundColor  = "red";
    }
};

const playGame = (userChoice) => {                  //stp 3

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scessor" ? false : true;
        }
        else{
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{                                    //stp 2
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});

