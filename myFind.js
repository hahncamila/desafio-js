function myFind(predicate){
    for (let i=0; i < this.length; i++ ){
        const item = this[i]
        if(predicate(item,i,this)){
            return item
        }
    }
}

Array.prototype.myFind = myFind
const letras = ["a", "b", "c", "d", "e", "f", "g"]

letras.__proto__.batata = "doce"

const result = letras.myFind((l) => l == "d")
console.log(result)
console.log(letras.myFind, "-", letras.myFind)

const outrasLetras = ["a", "b", "c", "d", "e", "f", "g"]
console.log(result, "-", outrasLetras.batata)