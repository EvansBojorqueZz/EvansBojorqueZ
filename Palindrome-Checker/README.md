# Palindrome Checker | Verificador de Palíndromos

## Description | Descripción
Algoritmo para verificar si una cadena de texto es un palíndromo, ignorando variaciones de mayúsculas, puntuación y espacios. El programa elimina todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y los convierte todos en un mismo formato (minúsculas) para comprobar la coincidencia.

*Algorithm to check if a string is a palindrome, ignoring case, punctuation, and spacing. The program removes all non-alphanumeric characters and converts the string to lowercase to verify the match.*

## Test Cases | Casos de Prueba
Puedes probar el algoritmo con las siguientes cadenas:
- `racecar`, `RaceCar`, `race CAR`
- Con símbolos especiales: `2A3*3a2`, `2A3 3a2`, `2_A3*3#A2`

## Technical Challenges | Retos Técnicos
- **Regex:** Limpieza de datos mediante expresiones regulares para filtrar solo caracteres alfanuméricos.
- **String Manipulation:** Uso de métodos encadenados como `.toLowerCase()`, `.split()`, `.reverse()` y `.join()`.
