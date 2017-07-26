var fibonacci = (function() {
    var memo = {};
    function f(number) {
        if (number in memo) {
            return memo[number];
        } else {
            if (number === 0 || number === 1) {
                return number;
            } else {
                memo[number] = fibonacci(number - 1) + fibonacci(number - 2);
                return memo[number];
            }
        }
    }
    return f;
})()
module.exports = fibonacci;