function askFoo () {
    return new Promise(function (resolve, reject) {
    resolve('foo');
    });
}

function run (generator) {
    let iterator = generator();
    let iteration = iterator.next();
    let promise = iteration.value;
    promise.then( x => iterator.next(x));
    
}

run(function* () {
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch (err) {
        console.log(err);
    }
});