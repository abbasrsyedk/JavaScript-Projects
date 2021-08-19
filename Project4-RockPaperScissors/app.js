//big function that is basically the whole game

//creating the arrow function = ()=>{}

const game = ()=> {
    //updating scores
    let pScore=0;
    let bScore=0;

    //creating the start game function
    const startGame = ()=> {
        //selecting the lets go button
        const playButton = document.querySelector(".intro button");

        //selecting the intro screen
        const introScreen = document.querySelector(".intro");

        //match screen 
        const matchScreen = document.querySelector(".match");

        //after the lets go is clicked the intro screen fadesout and match screen fades in
        playButton.addEventListener("click", ()=>
        {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        }
        );
    };
    //play match function
const playMatch = ()=> {
    //all the options available
    const options = document.querySelectorAll('.options button');
    //player hand
    const playerHand = document.querySelector('.player-hand');
    //bot hand
    const botHand = document.querySelector('.bot-hand');

    const hands = document.querySelectorAll('.hands img');
    hands.forEach((hand) =>{
        hand.addEventListener('animationend', function(){
            this.style.animation="";
        });
    });

    //computer options
    //generate a random number between 0,1,2 and associate the number to a image ex: rock-1,paper-1,scissor-2
    //we can use Math.random()
    const botOptions = ["rock","paper","scissors"];
    

    //using the arrow fucntion 
    options.forEach(option=>{
        option.addEventListener('click', function() {
        //if we use this here it will be the option we click on 
        //math.random generates between 0,1
        //math.floor gives the absolute values 
        //this is the bot choice
        const botNumber = Math.floor(Math.random()*3);
        const botChoice = botOptions[botNumber];

        setTimeout(() =>{
            //comparing the hands
        compareHands(this.textContent, botChoice);
        //update Images
        //depending on the option that is selected we update image  
        playerHand.src = `./images/${this.textContent}.png`;
        //updating the image of the bot hand using the random function we created earlier
        botHand.src = `./images/${botChoice}.png`;

        }, 1800);// here setTimeout(()=>{},time)

        //run animation
        playerHand.style.animation = "shakePlayer 2s ease";
        botHand.style.animation = "shakeBot 2s ease";
        
        });
    });

};
    //update score function
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        
        const botScore = document.querySelector('.bot-score p');

        playerScore.textContent = pScore;
        botScore.textContent = bScore;

    };




       //comparision function we are going to feed the choice that we make that wil compare whos winning
    const compareHands = (playerChoice,botChoice)=>{
        //update text (choose an option)
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === botChoice){
            winner.textContent = 'The Game is a tie';
            return;
        };
        //check for rock
        if(playerChoice==='rock'){
            //rock & paper
            if(botChoice==='paper'){
                winner.textContent = 'Bot wins the round';
                bScore++;
                updateScore();
                return;
            };
            //rock & scissors
            if(botChoice==='scissors'){
                winner.textContent = 'You win the round';
                pScore++;
                updateScore();
                return;
            };
        };
        //if player chooses paper
        if(playerChoice==='paper'){
            //paper & rock
            if(botChoice==='scissors'){
                winner.textContent = 'Bot wins the round';
                bScore++;
                updateScore();
                return;
            };
            //paper & scissors
            if(botChoice==='rock'){
                winner.textContent = 'You win the round';
                pScore++;
                updateScore();
                return;
            }
        }
        //if player choose scissors
        if(playerChoice==='scissors'){
            //scissors & rock
            if(botChoice==='rock'){
                winner.textContent = 'Bot wins the round';
                bScore++;
                updateScore();
                return;
            }
            //scissors & paper
            if(botChoice==='paper'){
                winner.textContent = 'You win the round';
                pScore++;
                updateScore();
                return;
            }
        }
    };



    //call all the inner functions
    startGame();
    playMatch();
};






//starting the game
game();
