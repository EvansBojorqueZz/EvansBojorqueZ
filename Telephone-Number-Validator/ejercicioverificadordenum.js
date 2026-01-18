function telephoneCheck(str) {
  // Expresión regular para validar formatos de EE. UU.
  // ^(1\s?)?     -> Opcional: Código de país '1' seguido de un espacio opcional.
  // (\(\d{3}\)|\d{3}) -> Código de área: 3 dígitos entre paréntesis o solo 3 dígitos.
  // [\s\-]?      -> Separador opcional: espacio o guion.
  // \d{3}        -> Primeros 3 dígitos del número local.
  // [\s\-]?      -> Separador opcional: espacio o guion.
  // \d{4}$       -> Últimos 4 dígitos del número y fin de la cadena.
  const regex = /^(1\s?)?(\d{3})|\d{3}[\s\-]?\d{3}[\s\-]?\d{4}$/; 
  if (regex.test(str)){  //Un testeo final con el regex para saber si cumple con la condición
    return console.log("true");
  }
}

telephoneCheck("555-555-5555");     //Número a validar