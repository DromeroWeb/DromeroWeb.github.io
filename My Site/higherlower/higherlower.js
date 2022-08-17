//let input = window.prompt("What should the Max Number be?");

//let max_num = Number(input);

//console.log(num)

let valid_input = false;
let max_num, input;
while(!valid_input){
    input = window.prompt("What should the Max Number be?");

    max_num = Number(input);
    val = Math.round(input);

    if(max_num != NaN && max_num>0){
        valid_input = true;

    }

}

let num = Math.floor(Math.random() * max_num) + 1;

let message2 = document.getElementById("message2");
    if(max_num == max_num){
        message.innerHTML = "Guess a Number Between 1 and " + max_num;
    }
    
let num_guess = 0;
let tries = [];

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if (tries.includes(guess)){
        message.innerHTML="You guessed this Number ALready<br>Guess a number between 1 and" + max_num;
    }
    
    else if(guess > max_num){
        message.innerHTML = "That Number is not in range, Try again <br> Guess a number between 1 and" + max_num
        num_guess +=1;
        tries.push(guess);

    }

    else if (guess < num){
        message.innerHTML ="No, try a higher number<br> Guess a number between 1 and" + max_num
        num_guess +=1;
        tries.push(guess);

    }

    else if( guess > num){
        message.innerHTML ="No, try a lower number<br> Guess a number between 1 and" + max_num
        num_guess +=1;
        tries.push(guess);
    }
        
        
    

    else if (guess == num){
        message.innerHTML = "YOU GOT IT! It took you " + num_guess + "&nbsp; tries, your guesses were<br>" + tries;
        



    }
  
    
    
}

