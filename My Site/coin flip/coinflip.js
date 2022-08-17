function flip(guess) {
    // random number

    let result = Math.floor(Math.random() * 2) + 1;


    // get the message paraggraph

    let message = document.getElementById("message");

    //check result of the random versus the guess

    if(result == 1 ) {
        if(guess == "heads"){
            message.innerHTML = "You guessed heads.<br> The coin flip and omes up heads! Good Guess!";
        }
        else{
            message.innerHTML = "You guessed Tails. <br> The coin flips and comes up heads! Try again!";
        }

    }
    else {
        if(guess == "tails"){
            message.innerHTML = "You guessed tails.<br>The coing flips and comes up tails! Good guess!";        
        }
        else{
            message.innerHTML = "You guessed heads.<br>The coin flips and comes up tails! Good Guess!";
        }
    }

}