function isEven (number) {
    if (number === 0) {
        return true;
    } else if(number <= 1) {
        return false;
    } else {
        return isEven(number - 2);
    }

}
module.exports = isEven;