function circulo(r){

    let area = Math.PI * (r**2);
    let perimetro = 2 * Math.PI * r;
    return{

        area: area,
        perimetro: perimetro

    };

}
r = Number(prompt('Digite o raio:'));
console.log(`AREA DO CIRCULO:${circulo(r).area.toFixed(2)}`);
console.log(`PERIMETRO DO CIRCULO:${circulo(r).perimetro.toFixed(2)}`);
//toFixed(Imprime a área e o perímetro formatados com duas casas decimais.)

//--------------------------Outra Forma de Fazer--------------------------------------------------//

// function calcularCirculo(raio) {
//     if (raio <= 0) {
//         return "O raio deve ser um número positivo";
//     }

//     const area = Math.PI * Math.pow(raio, 2);
//     const perimetro = 2 * Math.PI * raio;

//     return {
//         area: area,
//         perimetro: perimetro
//     };
// }

// // Exemplo de uso:
// const raio = Number(prompt('Digite o raio:'));
// const resultado = calcularCirculo(raio);
// console.log(`Área: ${resultado.area.toFixed(2)}`);
// console.log(`Perímetro: ${resultado.perimetro.toFixed(2)}`);
