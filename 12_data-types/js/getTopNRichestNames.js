function getTopNRichestNames (N, people) {
    var map = {
        K : "e3",
        M : "e6",
        B : "e9"
    }
    var incomeArr = pluckByAttribute(people,"income").map(function(el) {
        return cypherPhrase(map,el);
    });
    for (var i = 0; i < people.length; i++) {
        people[i].income = incomeArr[i];
    }
    incomeArr.sort(function(a,b) {return b-a});
    incomeArr = getTransformedArray(incomeArr, function(el) {
        for(var i = 0; i < people.length; i++) {
            if (people[i].income === el) {
                return people[i].name;
            }
        }
    });
    return incomeArr.slice(0,N);
}