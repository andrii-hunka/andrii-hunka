Function.prototype.bindMe = function () {
    var func = this;
    var context = arguments[0];
    return function() {
        return func.apply(context, arguments);
    }
}