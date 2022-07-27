let p1 = 0;
let p2 = 0;


function playGame() {
    p1 = Math.floor( Math.random() * 3 + 1);
    p2 = Math.floor( Math.random() * 3 + 1);
    console.log(p1 + " " + p2)
    winner = "";
    draw = false;

    if(p1 === p2) {
        draw = true;
    }

    //paper beats rock
    if(p1 === 1 && p2 === 2) {
        winner = "Player 1"
    }

    if(p1 === 2 && p2 === 1) {
        winner = "Player 2"
    }

    //Rock beats scissors
    if(p1 === 2 && p2 === 3) {
        winner = "Player 1"
    }

    if(p1 === 3 && p2 === 2) {
        winner = "Player 2"
    }

    //scissors beats paper
    if(p1 === 3 && p2 === 1) {
        winner = "Player 1"
    }

    if(p1 === 1 && p2 === 3) {
        winner = "Player 2"
    }

    switch (p1) {
        case 1:
            document.getElementById('p1Img').src="img/paper.png";
            break;
        case 2:
            document.getElementById('p1Img').src="img/rock.png";
            break;
        case 3:
            document.getElementById('p1Img').src="img/scissors.png";
            break;
        default:
            break;
    }

    switch (p2) {
        case 1:
            document.getElementById('p2Img').src="img/paper.png";
            break;
        case 2:
            document.getElementById('p2Img').src="img/rock.png";
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
    

}