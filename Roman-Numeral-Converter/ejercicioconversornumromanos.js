function convertToRoman(num) {
  const numRom = [                  //Arreglo de objetos para almacenar pares de valores (Romano/Decimal)
  { romano: "M", valor: 1000 },
  { romano: "CM", valor: 900 },
  { romano: "D", valor: 500 },
  { romano: "CD", valor: 400 },
  { romano: "C", valor: 100 },
  { romano: "XC", valor: 90 },
  { romano: "L", valor: 50 },
  { romano: "XL", valor: 40 },
  { romano: "X", valor: 10 },
  { romano: "IX", valor: 9 },
  { romano: "V", valor: 5 },
  { romano: "IV", valor: 4 },
  { romano: "I", valor: 1 },
];
  let resultado = [];
  for (const numeroTrad of numRom){
    while (num >= numeroTrad.valor){    //Uso de for...of para recorrer el arreglo de objetos con un while anidado para ir restando los numeros creados y añadidos.
        console.log("Utilizando el numero romano: " + numeroTrad.romano + ". Para representar el valor: " + numeroTrad.valor + "."); //Simplemente para indicar que numero romano vamos a ocupar para que numero.
        num -= numeroTrad.valor;              //Hacemos la resta del valor del numero usado
        resultado.push(numeroTrad.romano);    //Lo agregamos a nuestro arreglo de resultado
    }                                         // while termina hasta que num llegue a 0.

  }
 let resultadoFinal = resultado.join("");     //Unimos el arreglo del resultado a una cadena de texto para que todo esté junto
 return console.log(resultadoFinal);          
}

convertToRoman(72);                            //Número que busca traducir a romano el usuario