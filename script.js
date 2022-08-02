let numberPennies = 23;
let info = document.getElementById("info");
let feedback = document.getElementById("feedback");
let pieces = document.getElementById("pieces");

let intro = "<h3>23 Pennies</h3>";
intro += "Take turns removing 1, 2, or 3 pennies. "
intro += "Whoever takes the last penny loses.";
info.innerHTML = intro;

displayPennies();

function displayPennies() {
    pieces.innerHTML = "";
    for (let i =0; i < numberPennies; i++) {
        let penny = "<div class='penny'></div>";
        pieces.innerHTML += penny;
    }
};
function take(num) {
    if (num > numberPennies) {
        feedback.innerHTML = "There aren't enough pennies.";
        return;
    }
    if (num === numberPennies) {
        feedback.innerHTML = "You took the last penny. You lose.";
        numberPennies -= num;
        displayPennies();
        return;
    }
    numberPennies -= num;
    feedback.innerHTML = "You took " + num;
    if (num === 1) {
        feedback.innerHTML += " penny. ";
    } else {
        feedback.innerHTML += " pennies. ";
    }
    displayPennies();
    computerTurn();
}

function computerTurn() {
    let num;
    if (numberPennies > 21 && numberPennies < 25) {
        num = numberPennies - 21;
    } else if (numberPennies > 17 && numberPennies < 21) {
        num = numberPennies - 17;
    } else if (numberPennies > 13 && numberPennies < 17) {
        num = numberPennies - 13;
    } else if (numberPennies > 9 && numberPennies < 13) {
        num = numberPennies - 9
    } else if (numberPennies > 5 && numberPennies < 9) {
        num = numberPennies - 5;
    } else if (numberPennies > 1 && numberPennies < 5) {
        num = numberPennies - 1;
    } else {
        while (true) {
            num = Math.floor(Math.random() * 3) + 1;
            if (num <= numberPennies) {
                break;
            }
        }
    }
    if (num === numberPennies) {
        feedback.innerHTML += "The computer took the last penny. You win.";
        numberPennies -= num;
        displayPennies();
        return;
    }
    numberPennies -= num;
    feedback.innerHTML += "The computer took " + num;
    if (num === 1) {
        feedback.innerHTML += " penny. ";
    } else {
        feedback.innerHTML += " pennies. ";
    }
    displayPennies();
}