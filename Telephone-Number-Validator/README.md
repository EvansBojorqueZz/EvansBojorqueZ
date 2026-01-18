# Telephone Number Validator | Validador de Números Telefónicos

## 📝 Descripción | Description
Este script utiliza Expresiones Regulares (RegEx) para validar si una cadena de texto corresponde a un formato válido de número telefónico de Estados Unidos. Soporta variaciones con código de país, paréntesis, espacios y guiones.
En el código está el comentario explicando cada parte del RegEx.
*This script uses Regular Expressions (RegEx) to validate if a string corresponds to a valid U.S. phone number format. It supports variations with country codes, parentheses, spaces, and hyphens.*

## Casos de Prueba | Test Cases
El algoritmo valida formatos como:
- `555-555-5555`
- `(555)555-5555`
- `1 555-555-5555`
- `1(555)555-5555`

## 🛠️ Retos Técnicos | Technical Challenges
- **Complex RegEx**: Creación de un patrón que maneja grupos opcionales para el código de país (1) y los paréntesis en el área local.
- **Pattern Matching**: Implementación del método `.test()` para una validación booleana rápida y eficiente.
