// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 2 — Coche.ts                                            ║
// ║  ROL EN EL PATRÓN: PRODUCTO A (el objeto que se fabrica)         ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ¿QUÉ ES UN "PRODUCTO" EN EL PATRÓN BUILDER?
// ─────────────────────────────────────────────
// Es el objeto complejo que queremos construir.
// La clase Coche por sí sola no sabe cómo ensamblarse —
// eso es responsabilidad del Builder. Aquí solo se declaran
// qué partes tiene un coche terminado.
//
// PUNTO CLAVE PARA LA EXPOSICIÓN:
//   Coche y ManualDeCoche NO comparten ninguna interfaz entre sí.
//   Son objetos completamente distintos.
//   Esa es la magia del patrón: el Director produce ambos
//   con los mismos pasos, sin conocer las diferencias internas.
//   Por eso el cliente NO puede pedirle el resultado al Director
//   — el Director no sabe qué tipo de objeto acaba de construir.

export class Coche {

  // Todas las propiedades arrancan vacías / en cero / en false.
  // Un Coche recién creado está "en blanco" — sin piezas.
  // El Builder irá llenando estas propiedades una a una,
  // paso a paso, según lo que indique el Director.
  motor: string = "";
  asientos: number = 0;
  gps: boolean = false;
  computadoraDeBordo: boolean = false;

  // Método auxiliar para mostrar el resultado en consola.
  // No forma parte del patrón Builder — solo sirve para
  // verificar visualmente qué se construyó al final.
  describir(): void {
    console.log("🚗 Coche ensamblado:");
    console.log(`   Motor              : ${this.motor}`);
    console.log(`   Asientos           : ${this.asientos}`);
    console.log(`   GPS                : ${this.gps ? "Sí" : "No"}`);
    console.log(`   Computadora a bordo: ${this.computadoraDeBordo ? "Sí" : "No"}`);
  }
}