function getMin(args) {
    var min = arguments[0];
    for (var i = 1;i < arguments.length;i++) {
        if (isSmaller(arguments[i], min)) {
            min = arguments[i];
        }
    }
    return min;
}