var a = prompt("Insert a"),
    b = prompt("Insert b"),
    c = prompt("Insert c"),
    d = Math.pow(b,2) - 4*a*c;
    res1 = (-b + Math.sqrt(d))/(2*a),
    res2 = (-b - Math.sqrt(d))/(2*a);
console.log(`Рівняння ax2 + bx + c = 0 має 2 розв’язки: x1 = ${res1}, x2 = ${res2}`);

