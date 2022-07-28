let p1 = 0;
let p2 = 0;
p1Score = 0;
p2Score = 0;
gameWinner = "";

//Rock = 1
//Paper = 2
//Scissors = 3

function chooseRock() {
    p1 = 1;
    document.getElementById('chooseRock').style.border = '5px solid red'
    document.getElementById('choosePaper').style.border = 'none'
    document.getElementById('chooseScissors').style.border = 'none'
}

function choosePaper() {
    p1 = 2;
    document.getElementById('choosePaper').style.border = '5px solid red'
    document.getElementById('chooseRock').style.border = 'none'
    document.getElementById('chooseScissors').style.border = 'none'
}

function chooseScissors() {
    p1 = 3;
    document.getElementById('chooseScissors').style.border = '5px solid red'
    document.getElementById('choosePaper').style.border = 'none'
    document.getElementById('chooseRock').style.border = 'none'
}

function reset() {
    document.querySelector('.container').style.display = "block";
    document.querySelector('#game-winner').innerHTML = "";
    document.querySelector('#winnerText').style.display = "none";
    winner = "";
    p1Score = 0;
    p2Score = 0;
    document.getElementById('p1Score').innerHTML = p1Score;
    document.getElementById('p2Score').innerHTML = p2Score;
    document.getElementById('p1Img').src="img/main.jpg";
    document.getElementById('p2Img').src="img/main.jpg";
    document.getElementById("result").innerHTML="";
}


function playGame() {
    document.getElementById('chooseRock').style.border = 'none'
    document.getElementById('choosePaper').style.border = 'none'
    document.getElementById('chooseScissors').style.border = 'none'
    p2 = Math.floor( Math.random() * 3 + 1);
    winner = "";
    draw = false;

    if(p1 === p2) {
        draw = true;
    }

    //p1 = rock p2 = paper
    if(p1 === 1 && p2 === 2) {
        winner = "Player 2";
        p2Score++;
        document.getElementById('p2Score').innerHTML = p2Score
    }

    //p1 = paper p2 = rock
    if(p1 === 2 && p2 === 1) {
        winner = "Player 1"
        p1Score++;
        document.getElementById('p1Score').innerHTML = p1Score;
    }

    //p1 paper p2 scissors
    if(p1 === 2 && p2 === 3) {
        winner = "Player 2"
        p2Score++;
        document.getElementById('p2Score').innerHTML = p2Score
    }

    if(p1 === 3 && p2 === 2) {
        winner = "Player 1"
        p1Score++;
        document.getElementById('p1Score').innerHTML = p1Score;
    }

    //scissors beats paper
    if(p1 === 3 && p2 === 1) {
        winner = "Player 2"
        p2Score++;
        document.getElementById('p2Score').innerHTML = p2Score
    }

    if(p1 === 1 && p2 === 3) {
        winner = "Player 1"
        p1Score++;
        document.getElementById('p1Score').innerHTML = p1Score;
    }

    switch (p1) {
        case 1:
            document.getElementById('p1Img').src="img/rock.png";
            break;
        case 2:
            document.getElementById('p1Img').src="img/paper.png";
            break;
        case 3:
            document.getElementById('p1Img').src="img/scissors.png";
            break;
        default:
            break;
    }

    switch (p2) {
        case 1:
            document.getElementById('p2Img').src="img/rock.png";
            break;
        case 2:
            document.getElementById('p2Img').src="img/paper.png";
            break;
        case 3:
            document.getElementById('p2Img').src="img/scissors.png";
            break;
        default:
            break;
    }
    if(draw) {
        document.getElementById("result").innerHTML="It's a draw";
    } else {
        document.getElementById("result").innerHTML="Winner is " + winner;
    }

    if(p1Score === 5 || p2Score === 5) {
        if(p1Score === 5) {
            winner = "Player 1";
        }

        if(p2Score === 5) {
            winner = "Player 2";
        }
        document.querySelector('.container').style.display = "none";
        document.querySelector('#game-winner').innerHTML = "Winner is " + winner;
        document.querySelector('#winnerText').style.display = "block";
    }

    
    

}