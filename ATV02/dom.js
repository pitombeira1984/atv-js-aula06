function quadrado(x){

    let quadrado = x**2;
    return quadrado;

}
x = Number(prompt('Digite um Número:'));
console.log(`O quadrado do numero digitado ${x} é:${quadrado(x)}`)