function palindrome(str) {
  const wordOrig = str.toLowerCase() //método encadenado para convertir la cadena a minusculas
    .split("")                       //método encadenado para dividir la cadena caracter por caracter y convertirla a un arreglo
    .filter(word => {                 //Decidimos que solo quedarán en ese arreglo los que cumplan con el test
    return /[a-zA-Z0-9]/.test(word);  //Si solo es letra o número, pasan el test
     })
    .join ("");                       //Volvemos a unir el arreglo a una cadena de texto
  const wordRev = [...wordOrig];      //Creamos una copia de la palabra original ya filtrada y testeada
  const finalRev = wordRev.reverse()  //Usamos el método para voltear el arreglo
          .join("");                  //Volvemos a unirlo en una cadena de texto
  if (wordOrig === finalRev){         //Comparamos la palabra original con la volteada
    return console.log(true);         //True si es un palíndromo
  }else{
    return console.log(false);        
  };
}

palindrome("0_0 (: /-\ :) 0-0");       //Cadena a probar



