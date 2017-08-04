var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if(val !== '') args.push(+val);
    });
});
function avg(...arr) {
  let sum = arr.reduce((sum,el) => {
    return sum + el;
  },0);
  return sum/arr.length;
} 

console.log(avg(...args));