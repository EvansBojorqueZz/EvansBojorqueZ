# Roman Numeral Converter | Conversor de Números Romanos

## 📝 Descripción | Description
Algoritmo para convertir números decimales (enteros) a números romanos. El programa utiliza un mapeo de valores estándar y recorre las equivalencias de mayor a menor para construir la cadena final.

*Algorithm to convert decimal numbers (integers) into Roman numerals. The program uses a standard value mapping and iterates through equivalencies from largest to smallest to build the final string.*

## 🚀 Casos de Prueba | Test Cases
El algoritmo puede procesar números como:
- `72` -> "LXXII"
- `3999` -> "MMMCMXCIX"
- Cualquier entero positivo dentro del rango estándar de numeración romana.

## 🛠️ Retos Técnicos | Technical Challenges
- **Data Mapping**: Uso de un arreglo de objetos para almacenar pares de valores (Romano/Decimal) y mantener un código limpio.
- **Nested Loops**: Implementación de un ciclo `for...of` con un `while` anidado para realizar las restas sucesivas y la construcción del resultado.
- **Array Methods**: Uso de `.push()` para acumular los símbolos y `.join("")` para generar la cadena final.
