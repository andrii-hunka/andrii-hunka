function *factorial(n){
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
        yield res;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}