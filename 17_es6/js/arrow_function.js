var inputs = process.argv.slice(2);
var result = inputs.map(el => el[0]).reduce((res, el) => res.concat(el.toUpperCase()));
console.log(result);