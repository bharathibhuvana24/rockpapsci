const CompChoice = document.getElementById("comp-choice");
const UrChoice = document.getElementById("your-choice");
const Score = document.getElementById("result");

const possibilities = document.querySelectorAll('img');

possibilities.forEach(possibilities => addEventListener('click',(e) =>{
    var userchoice = e.target.id;
    UrChoice.innerHTML = userchoice;
    CompChoicegenerator();
    answer();
    

}
))

function CompChoicegenerator()
{
    const RandomNum = Math.floor(Math.random()*3)+1;
    if(RandomNum === 1)
        {
            CompOpt = "Rock";
        }
        if(RandomNum === 2)
            {
                CompOpt = "Paper";
            }
            if(RandomNum === 3)
                {
                    CompOpt = "Scissor";
                }
    CompChoice.innerHTML = CompOpt;
               
}

function answer()
{
    if(CompOpt === userchoice)
        {
            result = "Draw!"
        }
    if(CompOpt === "Rock" && UrChoice === "Paper")
        {
            result = "You won!"
        }
        if(CompOpt === "Paper" && UrChoice === "Scissor")
            {
                result = "You lose!"
            }
            if(CompOpt === "Scissor" && UrChoice === "Paper")
                {
                    result = "You won!"
                }
                if(CompOpt === "Rock" && UrChoice === "Scissor")
                    {
                        result = "You won!"
                    }
                    if(CompOpt === "Scissor" && UrChoice === "Rock")
                        {
                            result = "You lose!"
                        }
                        if(CompOpt === "Paper" && UrChoice === "Rock")
                            {
                                result = "You Won!"
                            }
                            if(CompOpt === "Rock" && UrChoice === "Paper")
                                {
                                    result = "You lose!"
                                }
                    Score.innerHTML = result;
}