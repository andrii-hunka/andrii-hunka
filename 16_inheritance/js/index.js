function assign() {
    var object = arguments[0];
    for(var i = 1 ; i < arguments.length; i++) {
        for(var prop in arguments[i]) {
            if (arguments[i].hasOwnProperty(prop)) {
                object[prop] = arguments[i][prop];
            }   
        }
    }
    return object;
}