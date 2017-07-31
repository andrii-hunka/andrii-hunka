function Casino (numberOfSlotMachines, initialAmountOfMoney) {
    var _numberOfSlotMachines = numberOfSlotMachines;
    var _initialAmountOfMoney = initialAmountOfMoney;
    var _slotMachines = new Array(numberOfSlotMachines);
    var _luckySlotMachineNumber = getRandomNumber(_numberOfSlotMachines);
    this.getTotalAmountOfMoney = function() {
        var casinoMoney = _slotMachines.reduce(function(sum, el) {
            return sum + el.totalAmountOfMoney(); 
        },0);
        console.log(`The total amount of money is $${casinoMoney}`)
        return casinoMoney;
    }
    this.getTotalNumberOfSlotMachines = function() {
        return _numberOfSlotMachines;
    }
    this.addNewSlotMachine = function() {
        var biggestAmountOfMoney = _slotMachines.reduce(function(biggest, el) {
            if(el.totalAmountOfMoney() > biggest) {
                return el.getTotalAmountOfMoney();
            }
        },0);
        var newInitialAmountOfMoney = biggestAmountOfMoney/2;
        var newSlotMachine = new SlotMachine(newInitialAmountOfMoney);
        _slotMachines.push(newSlotMachine);
        _numberOfSlotMachines = _slotMachines.length;
        console.log(`New slot machine has been added with initial amount of money $${newInitialAmountOfMoney}`);
    }
    this.removeSlotMachine = function (slotMachineNumber) {
        _slotMachines.splice(slotMachineNumber,1);
    }

    (function createSlotMachines(_numberOfSlotMachines) {
        for (var i = 0 ; i < _numberOfSlotMachines; i++) {
            if(i === _luckySlotMachineNumber) {
                _slotMachines[i] = new SlotMachine(initialAmountOfMoney/numberOfSlotMachines, true);
            } else {
                _slotMachines[i] = new SlotMachine(initialAmountOfMoney/numberOfSlotMachines);
            }
        }
    })();
    function getRandomNumber (maxRange) {
        return Math.floor(Math.random() * maxRange);
    }
}

function SlotMachine (initialAmountOfMoney) {  
    var _totalAmountOfMoney = initialAmountOfMoney;
    // var _isLucky = isLucky;
    this._isLucky = false;
    this.totalAmountOfMoney = function() {
        console.log(_totalAmountOfMoney);
        return _totalAmountOfMoney;
    }
    this.putMoney = function(amountOfMoney) {
        _totalAmountOfMoney += amountOfMoney;
    }
    this.takeMoney = function(amountOfMoney) {
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
        _totalAmountOfMoney += amountOfMoney;
        var winNumber = getWinNumber();
        var winMoney;
        if (winNumber == 777) {
            winMoney = takeMoney(_totalAmountOfMoney);
        }
        if (winNumber[0] === winNumber[1] && winNumber[1] === winNumber[2]) {                                   //three similar digits 
            winMoney = takeMoney(amountOfMoney * 5);
        }
        if (winNumber[0] === winNumber[1] || winNumber[0] === winNumber[2] || winNumber[1] === winNumber[2] ) { //two similar digits 
            winMoney = takeMoney(amountOfMoney * 2);
        } else {
            console.log(`${winNumber}\nYou lost`);
            return 0;
        }
        console.log (`${winNumber}\nYou won $${winMoney}`);
        return winMoney;
    }
    function getWinNumber() {
        var winNumber = getRandomNumber();
        if (_isLucky && winNumber === 777) {
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
}