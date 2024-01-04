
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#play");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");

let userScore = 0;
let compScore = 0;

let genCompChoice = ()=>{
    let arr = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return arr[randIdx];
}

let draw = ()=>{
    msg.innerText = "Game Has Been Drawn";
    msg.style.backgroundColor = "#081b31";
}

let showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin == true)
    {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;

        user.innerText = userScore;
    }
    else
    {
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        computer.innerText = compScore;
    }
}

let playGame = (userChoice)=>{
    let compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
        draw();
    }
    else
    {
        let userWin = true;

        if(userChoice === "rock")
        {
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "rock"?true:false;
        }
        else
        {
            userWin = compChoice === "rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});

