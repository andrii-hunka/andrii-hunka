function Casino (numberOfSlotMachines, initialAmountOfMoney) {
    var _slotMachines = new Array(numberOfSlotMachines);
    var _luckySlotMachineNumber = getRandomNumber(numberOfSlotMachines);
    (function () {       
        for (var i = 0 ; i < numberOfSlotMachines; i++) {
            var initMoney = Math.floor(initialAmountOfMoney/numberOfSlotMachines);
            _slotMachines[i] = new SlotMachine(initMoney);
        }
        var totalMoney = _slotMachines.reduce(function(sum, el) {
            return sum + el.totalAmountOfMoney();
        },0);
        if(totalMoney < initialAmountOfMoney) {
            _slotMachines[0].putMoney(initialAmountOfMoney - totalMoney); // putting rest of the money in 1st slotmachine
        }
        _slotMachines[_luckySlotMachineNumber].isLucky = true;
    })();
    this.getTotalAmountOfMoney = function() {
        var casinoMoney = _slotMachines.reduce(function(sum, el) {
            return sum + el.totalAmountOfMoney(); 
        },0);
        console.log(`The total amount of money in casino is $${casinoMoney}`)
        return casinoMoney;
    }
    this.getTotalNumberOfSlotMachines = function() {
        console.log(`There are ${_slotMachines.length} slotmachines in a casino`)
        return _slotMachines.length;
    }
    this.addNewSlotMachine = function() {
        var biggestAmountOfMoney = _slotMachines[0].totalAmountOfMoney();
        _slotMachines.forEach(function(el) {
            if(el.totalAmountOfMoney() > biggestAmountOfMoney) {
                biggestAmountOfMoney = el.totalAmountOfMoney();
            }
        });
        var newInitialAmountOfMoney = Math.floor(biggestAmountOfMoney/2);
        var newSlotMachine = new SlotMachine(newInitialAmountOfMoney);
        _slotMachines.push(newSlotMachine);
        console.log(`New slot machine id:${newSlotMachine.id} has been added with initial amount of money $${newInitialAmountOfMoney}`);
    }
    this.removeSlotMachine = function (slotMachineId) {
        for(var i = 0; i < _slotMachines.length; i++) {
            if(_slotMachines[i].id === slotMachineId) {
                var moneyFromDeletedSlotMachine = _slotMachines[i].takeMoney(_slotMachines[i].totalAmountOfMoney());
                var isLucky = _slotMachines[i].isLucky;
                _slotMachines.splice(i,1);
                console.log(`Slot machine id:${slotMachineId} has been removed`);
                var totalPutMoney = _slotMachines.reduce(function (sum, el) {
                    el.putMoney(Math.floor(moneyFromDeletedSlotMachine/_slotMachines.length));
                    return sum + Math.floor(moneyFromDeletedSlotMachine/_slotMachines.length); //adding money put in slotmachines
                },0);
                if(totalPutMoney < moneyFromDeletedSlotMachine) {
                    _slotMachines[0].putMoney(moneyFromDeletedSlotMachine - totalPutMoney); //putting the rest of money in 1st slotmachine
                }
                if(isLucky) {
                    var newLuckyMachine = getRandomNumber(_slotMachines.length);
                    _slotMachines[newLuckyMachine].isLucky = true;
                }
                break;
            }
        }
        console.log(`There is no slotmachine with id:${slotMachineId}`);
    }
    this.takeMoneyFromCasino = function(amountOfMoney) {
        if(!isProperValue(amountOfMoney)){
            return;
        }
        _slotMachines.sort(function(a,b) {
            return a.totalAmountOfMoney() < b.totalAmountOfMoney();
        });
        var takenMoneyFromCasino = _slotMachines[0].takeMoney(amountOfMoney);  
        for (var i = 1 ; i < _slotMachines.length ; i++) {
            if (takenMoneyFromCasino === amountOfMoney) {
                break;
            }
            takenMoneyFromCasino += _slotMachines[i].takeMoney(amountOfMoney - takenMoneyFromCasino); //taking the rest of money from other slotmachine
        }
        if (takenMoneyFromCasino != amountOfMoney) {
            console.log (`There wasn't enough money in casino to take, so here is all of it - $${takenMoneyFromCasino}`);
            return takenMoneyFromCasino;
        }
        console.log(`$${takenMoneyFromCasino} has been taken from a casino`);
        return takenMoneyFromCasino;
    } 
    function getRandomNumber (maxRange) {
        return Math.floor(Math.random() * maxRange);
    }
    function isProperValue(arg) {
        if(arg <= 0 || arg === undefined || isNaN(arg) ) {
            console.log("Wrong value");
            return false;
        }
        return true;
    }

    // for demo purpose
        this.getSlotMachineId = function(slotmachineNumber) {
            return _slotMachines[slotmachineNumber].id;
        }
    ///////////////////

}

function SlotMachine (initialAmountOfMoney) {  
    var _totalAmountOfMoney = parseFloat(initialAmountOfMoney.toFixed(2));
    this.isLucky = false;
    this.totalAmountOfMoney = function() {
        return _totalAmountOfMoney;
    }
    this.id = id();
    this.putMoney = function(amountOfMoney) {
       if(!isProperValue(amountOfMoney)){
            return;
        }
        _totalAmountOfMoney += amountOfMoney;
    }
    this.takeMoney = function(amountOfMoney) {
        if(!isProperValue(amountOfMoney)){
            return;
        }
        if(_totalAmountOfMoney >= amountOfMoney) {
            _totalAmountOfMoney -= amountOfMoney;
            return amountOfMoney;
        } else {
            var takenMoney = _totalAmountOfMoney;
            _totalAmountOfMoney = 0;
            return takenMoney;
        }
    }
    this.play = function(amountOfMoney) {
        if(!isProperValue(amountOfMoney)){
            return;
        }
        if(_totalAmountOfMoney < amountOfMoney) {
            return "The bet is too big";
        }
        _totalAmountOfMoney += amountOfMoney;
        var winNumber = getWinNumber();
        var winMoney;
        if (winNumber == 777) {
            winMoney = this.takeMoney(_totalAmountOfMoney);
            console.log (`The bet is $${amountOfMoney} \n${winNumber}\nYou won $${winMoney}`);
            return winMoney
        }
        if (winNumber[0] === winNumber[1] && winNumber[1] === winNumber[2]) {                                   //three similar digits 
            winMoney = this.takeMoney(amountOfMoney * 5);
            console.log (`The bet is $${amountOfMoney} \n${winNumber}\nYou won $${winMoney}`);
            return winMoney
        }
        if (winNumber[0] === winNumber[1] || winNumber[0] === winNumber[2] || winNumber[1] === winNumber[2] ) { //two similar digits 
            winMoney = this.takeMoney(amountOfMoney * 2);
            console.log (`The bet is $${amountOfMoney} \n${winNumber}\nYou won $${winMoney}`);
            return winMoney
        } 
        console.log(`The bet is $${amountOfMoney} \n${winNumber}\nYou lost`);
    }
    function getWinNumber() {
        var winNumber = getRandomNumber(1000);
        if (this.isLucky && winNumber === 777) {
            return getWinNumber(1000);
        } else {
            switch (winNumber.toString().length) {  //making 3-digit number (e.g 015) 
                case 1 : 
                    return `00${winNumber}`;
                case 2 : 
                    return `0${winNumber}`;
                default: 
                    return `${winNumber}`;
            }
        }
    }
    function isProperValue(arg) {
        if(arg <= 0 || arg === undefined || isNaN(arg) ) {
            console.log("Wrong value");
            return false;
        }
        return true;
    }
    function id() {
        var idNumber = getRandomNumber(9999999);
        return idNumber;
    }
    function getRandomNumber (maxRange) {
        return Math.floor(Math.random() * maxRange);
    }
}

function demo() {
    var myCasino = new Casino(10, 1000055);
    var slot = new SlotMachine(300000);
    //Casino test
    var secondMachineId = myCasino.getSlotMachineId(1);
    console.log(myCasino.removeSlotMachine(secondMachineId));
    console.log(myCasino.removeSlotMachine(secondMachineId));
    console.log(myCasino.getTotalNumberOfSlotMachines());
    console.log(myCasino.getTotalAmountOfMoney());
    console.log(myCasino.addNewSlotMachine());
    console.log(myCasino.takeMoneyFromCasino(20000000));
    console.log(myCasino.getTotalAmountOfMoney());
    /////////////

    //SlotMachine test
    console.log(`Total amount of money in slot machine - $${slot.totalAmountOfMoney()}`);
    console.log(slot.play(20));
    console.log(slot.play(-30));
    console.log(slot.play(30000000));
    console.log("$130 has been put in slotmachine\n" + slot.putMoney(130));
    console.log(`Total amount of money in slot machine - $${slot.totalAmountOfMoney()}`);
    console.log(`Money taken from slot machine - $${slot.takeMoney(100000)}`);
    console.log(`Total amount of money in slot machine - $${slot.totalAmountOfMoney()}`);
    /////////////
}
demo();
