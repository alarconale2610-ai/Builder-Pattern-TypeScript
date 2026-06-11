# Builder Pattern — TypeScript

Implementación del patrón de diseño creacional **Builder** en TypeScript, enfocado en la fabricación de autos junto con la generación de sus respectivos manuales de usuario.

---

## ¿Qué es el patrón Builder?

Builder es un patrón de diseño **creacional** que permite construir objetos complejos paso a paso. Separa la lógica de construcción del objeto de su representación final, permitiendo que el mismo proceso de construcción pueda crear productos completamente diferentes.

### ¿Qué problema resuelve?

Cuando una clase tiene muchos parámetros opcionales, se cae en la trampa del **constructor telescópico**: un constructor que crece indefinidamente con cada nueva característica opcional, obligando a pasar múltiples valores nulos o booleanos confusos.

```typescript
// ❌ Sin Builder: constructor monstruoso lleno de nulos y booleanos difíciles de leer
const coche = new Coche("V8 Turbo 600cv", 2, true, true, null, false);

// ✅ Con Builder: se configuran solo los pasos necesarios mediante un lenguaje fluido
const coche = new CocheBuilder()
  .setMotor("V8 Turbo 600cv")
  .setAsientos(2)
  .setGps()
  .setComputadoraDeBordo()
  .obtenerCoche();