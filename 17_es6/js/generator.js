const max = process.argv[2];
let FizzBuzz = function*() {
      let number = 0;
      while(number < max) {
        number++;
        if(number%3 === 0 && number%5 === 0) {
            yield "FizzBuzz";
            continue;
        }
        if(number%3 === 0) {
            yield "Fizz";
            continue;
        }
        if(number%5 === 0) {
            yield "Buzz";
            continue;
        }
        yield number;
    }
}();
for (var n of FizzBuzz) {
    console.log(n);
}