function rot13(str) {
  let resultado = str.split("")                     //Dividimos en caracteres la cadena y lo guarda en un arreglo
  .map(letra => {                                   //Recorremos el arreglo letra por letra
    let lcode = letra.charCodeAt(0);                //Obtenemos el código ASCII de cada caracter y se guarda en una nueva variable
    if (lcode >= 65 && lcode <= 90){                //Si el codigo de la letra está en este rango significa que es una letra y no se ha salido del alfabeto, si es mayor a 90 significa que es un signo por lo que pasa a la instruccion del else
        let nwlcode = lcode += 13;                  //Por lo que le sumamos 13 al código y así recorrer el alfabeto
        if(nwlcode > 90){                           //Si el código se pasa de 90 significa que pasó la letra Z por lo que debemos restarle las 26 letras del alfabeto para que regrese a la letra 'a'.
            nwlcode -= 26;
            return String.fromCharCode(nwlcode);    //El nuevo codigo lo regresamos a letra.
        } else{
            return String.fromCharCode(nwlcode);     //Si al momento de sumarle 13 al codigo no se pasó del alfabeto, regresamos el codigo a letra
        }
    }else{
        return letra;                                //Al saber que esto no es una letra si no un signo o un espacio, lo regresamos así como está.
    }
  });
  return console.log(resultado.join(""));            //Unimos cada letra para regresarsela al usuario
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");//Cadena a descifrar 