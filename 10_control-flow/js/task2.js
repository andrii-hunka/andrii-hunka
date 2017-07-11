var isConfirmed = confirm("Чи бажаєте почати гру?");
if (isConfirmed) {
        var winPrize1 = 10,
            winPrize2 = 5,
            winPrize3 = 2,
            prize = 0,
            range = 5,
            continueToPlay = true;
    do {
        var randNumber = parseInt((Math.random()*range).toFixed());
        for (var i = 1; i <= 3 ; i++) {
            var userNumber = prompt("Введіть число");
            userNumber = parseInt(userNumber,10);
            if (isNaN(userNumber)) {
                console.log("Введіть правильно дані");
                continue;
            }
            if (userNumber === randNumber) {
                switch(i) {
                    case 1:
                        prize=prize+winPrize1;
                        break;
                    case 2:
                        prize=prize+winPrize2;
                        break;
                    case 3:
                        prize=prize+winPrize3;
                        break;
                }
                continueToPlay = confirm("Продовжити гру?");
                if (continueToPlay){
                    winPrize1*=3;
                    winPrize2*=3;
                    winPrize3*=3;
                    range*=2;
                    break;
                } else {
                    console.log(`Дякуємо за гру, ваш виграш становить ${prize}$`);
                    break;
                }
            }
            if (i === 3) {
                prize = 0;
                console.log(`Ваш виграш - ${prize}$`);
                continueToPlay = confirm("Зіграти знову?");
            }
        }
    } while(continueToPlay)  
} else {
    console.log("Сьогодні ви не виграли мільйон, а могли.");
}
