# Caesars Cipher (ROT13) | Cifrado César

## 📝 Descripción | Description
Este algoritmo implementa el cifrado César (ROT13), un método de cifrado por sustitución que desplaza cada letra 13 posiciones en el alfabeto. El programa procesa cadenas en mayúsculas y mantiene los espacios o símbolos especiales intactos.

*This algorithm implements the Caesar Cipher (ROT13), a substitution cipher that shifts each letter 13 positions in the alphabet. The program processes uppercase strings and leaves spaces or special symbols unchanged.*

## Casos de Prueba | Test Cases
El algoritmo descifra cadenas como:
- `GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.` -> "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

## 🛠️ Retos Técnicos | Technical Challenges
- **ASCII Manipulation**: Uso de `charCodeAt()` y `fromCharCode()` para operar con los valores numéricos de los caracteres en el rango 65-90 (A-Z).
- **Wrap-around Logic**: Implementación de una validación condicional para "dar la vuelta" al alfabeto restando 26 cuando el valor supera el código de la letra 'Z'.
- **Functional Programming**: Uso de `.split("")` y `.map()` para transformar la cadena de forma declarativa y limpia.
