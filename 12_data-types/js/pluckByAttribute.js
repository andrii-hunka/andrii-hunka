function pluckByAttribute(arrayOfObjects, attribute) {
    return getTransformedArray(arrayOfObjects, function(el) {
        return el[attribute];
    });
}