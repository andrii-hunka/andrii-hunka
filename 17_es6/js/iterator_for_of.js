const max = process.argv[2];
let FizzBuzz = {
      [Symbol.iterator]() {
        let number = 0;
        return {
            next() {
                number++;
                if(number <= max) {
                    if(number%3 === 0 && number%5 === 0) {
                        return {done:false, value: "FizzBuzz"};
                    }
                    if(number%3 === 0) {
                        return {done:false, value: "Fizz"};
                    }
                    if(number%5 === 0) {
                        return {done:false, value: "Buzz"};
                    }
                    return {done:false, value: number};
                }
                return{done:true}
            }
        }
    }
}
for (var n of FizzBuzz) {
    console.log(n);
}