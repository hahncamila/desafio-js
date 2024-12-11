function myMap(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        result.push(predicate(item, i, this));
    }
    return result;
}

Array.prototype.myMap = myMap;

const letras = ["a", "b", "c", "d", "e", "f", "g"];
const uppercase = letras.myMap((l) => l.toUpperCase());
console.log(uppercase); 
