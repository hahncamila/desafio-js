function myFilter(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {  
        const item = this[i];
        if (predicate(item, i, this)) {  
            result.push(item); 
        }
    }
    return result;  
}

Array.prototype.myFilter = myFilter;  
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
const pares = numeros.myFilter((l) => l % 2 === 0);  

console.log(pares);  

