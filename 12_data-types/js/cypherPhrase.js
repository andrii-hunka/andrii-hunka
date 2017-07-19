function cypherPhrase (object, string) {
    var arrString = string.split("");
    arrString = getTransformedArray(arrString, function(el) {
        if (object.hasOwnProperty(el)) {
            return object[el];
        } else {
            return el;
        }
    });
    return arrString.join("");
}