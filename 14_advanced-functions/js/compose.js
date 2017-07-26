function compose (...functions) {
    return function(...args){
        return functions.reduceRight(function(initValue, func) {
                return [func.apply(null, initValue)];
        },args)[0];
    }
};
module.exports = compose;