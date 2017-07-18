function guessingGame() {
    var isConfirmed = confirm("Чи бажаєте почати гру?");
    if (isConfirmed) {
        var prize = 0;
        var range = 5;
        var winPrizeMultiplier = 1;
        do {
            var randNumber = getRandomNumber(range);
            for (var numberOfTry = 1; numberOfTry <= 3 ; numberOfTry++){
                var userNumber = getUserNumber(range);
                if (isNaN(userNumber)) {
                    console.log("Введіть правильно дані");
                    continue;
                }
                if (numberIsGuessed(randNumber, userNumber)) {
                    prize = setPrize(prize, numberOfTry, winPrizeMultiplier);
                    if (resumeGame()) {
                        winPrizeMultiplier = increaseWinPrize(winPrizeMultiplier);
                        range = increaseRange(range);
                        break;
                    } else {
                        return `Дякуємо за гру, ваш виграш становить ${prize}$`;
                    }
                }
                if (numberOfTry === 3) {
                    console.log(`Ваш виграш - ${prize = 0}$`);
                    if (tryAgain()) {
                        break;
                    } else {
                        return "Дякуємо за гру";
                    }
                }
            }
        } while(true)
    }
    else {
        return "Сьогодні ви не виграли мільйон, а могли.";
    }
}  

function getRandomNumber(range) {
    return parseInt((Math.random() * range).toFixed());
}
function getUserNumber(range) {
    return parseInt(prompt(`Введіть число від 0 до ${range}`),10);
}
function numberIsGuessed(randNumber, userNumber) {
    return randNumber === userNumber;
}
function increaseWinPrize(winPrizeMultiplier) {
    return winPrizeMultiplier * 3;
}
function increaseRange(range) {
    return range * 2;
}
function setPrize(prize, numberOfTry, winPrizeMultiplier) {
    switch(numberOfTry) {
        case 1:
            return prize + 10 * winPrizeMultiplier;
        case 2:
            return prize + 5 * winPrizeMultiplier;
        case 3:
            return prize + 2 * winPrizeMultiplier;
    }
}
function resumeGame() {
    return confirm("Продовжити гру?");
}
function tryAgain() {
    return confirm("Зіграти знову?");
}