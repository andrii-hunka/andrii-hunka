var sh = "#";
var sp = " ";
var i = 0,
    j = 0;
    line = "";
while (i < 8) {
    while (j < 8) {
        if ((i%2 === 0 && j%2 === 0) || (i%2 === 1 && j%2 === 1)) {
            line += sh;
        } else {
            line += sp;
        }
        j++
    }
    console.log(line);
    line = "";
    j=0;
    i++;
}