var usd = 25.8,
    eur = 29.1,
    eurQuantity = prompt("Кількість євро"),
    usdQuantity = prompt("Кількість доларів");
console.log(`${eurQuantity} euros are equal ${eurQuantity*eur} UAH, ${usdQuantity} dollars are equal ${usdQuantity*usd} UAH,one euro is equal ${(eur/usd).toFixed(3)} dollars.`);
    