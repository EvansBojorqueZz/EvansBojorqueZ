# Cash Register | Caja Registradora

## 📝 Descripción | Description
Este es el proyecto final de la certificación. Es un algoritmo complejo que gestiona el inventario de una caja registradora, calcula el cambio exacto para un cliente y determina el estado de la caja (Abierta, Cerrada o Fondos Insuficientes).

*This is the certification's final project. It is a complex algorithm that manages cash register inventory, calculates exact change for a customer, and determines the drawer's status (Open, Closed, or Insufficient Funds).*

## 🛠️ Retos Técnicos | Technical Challenges
- **Floating-Point Precision**: Se implementó una lógica de conversión a centavos (`valor * 100`) para evitar los errores comunes de redondeo en los tipos de datos flotantes de JavaScript.
- **Inventory Logic**: Uso de `.reduce()` para calcular el total disponible en caja y ciclos `while` para extraer las denominaciones más altas primero.
- **State Management**: El programa devuelve un objeto con el `status` y el arreglo de `change` correspondiente, manejando casos de éxito y error de fondos.

##  Casos de Prueba | Test Cases
El algoritmo maneja con precisión casos como:
- Compra de $19.50 con un billete de $20.00 (Cambio: $0.50 en monedas de 25c).
- Casos donde el dinero en caja es igual al cambio necesario (Estado: CLOSED).
