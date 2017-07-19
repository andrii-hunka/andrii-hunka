function decypherPhrase (object, string) {
    for(var prop in object) {
        var swapValue = prop;
        prop = object[prop];
        object[prop] = swapValue; 
    }
    return cypherPhrase(object, string);
}