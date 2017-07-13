function getClosestToZero(args) {
    var closest = arguments[0];
    for (var i = 1;i < arguments.length;i++) {
        if(isSmaller(Math.abs(arguments[i]),Math.abs(closest))){
            closest = arguments[i];
        }
    }
    return closest;
}