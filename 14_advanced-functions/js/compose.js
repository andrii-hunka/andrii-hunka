function compose () {
    var functions = [].slice.call(arguments);
    return function(){
        var args = [].slice.call(arguments);
        return [].reduceRight.call(functions, function(initValue, func) {
                return [func.apply(null, initValue)];
        }, args)[0];
    }
};

module.exports = compose;