function myReduce(item, valorInicial) {
    let acumulador = valorInicial;
    let inicio = 0;

    if (valorInicial === undefined) {
        acumulador = this[0];
        inicio = 1;
    }
    for (let i = inicio; i < this.length; i++) {
        acumulador = item(acumulador, this[i], i, this);
    }
    return acumulador;
}

Array.prototype.myReduce = myReduce;

const numeros = [0, 10, 0, 4, 9];
const soma = numeros.myReduce((acumulador, atual) => acumulador + atual);
console.log(soma); 