var fs = require('fs');

function run (generator) {
    var it = generator(go);
    function go (err, result) {
        try {
            it.next(result);
        } catch (err) {
            yield null;
        }
    }
    go();
}

run(function* (done) {
    // catch exception
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined

    console.log(firstFile);
});