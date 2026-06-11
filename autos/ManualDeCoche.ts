// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 3 — ManualDeCoche.ts                                    ║
// ║  ROL EN EL PATRÓN: PRODUCTO B (el otro objeto que se fabrica)    ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ESTE ARCHIVO ES LA PRUEBA ESTRELLA DEL PATRÓN BUILDER
// ───────────────────────────────────────────────────────
// Un manual de papel no tiene NADA que ver con un coche de metal.
// No heredan de la misma clase. No implementan la misma interfaz.
// Son estructuralmente distintos: uno tiene "motor: string",
// el otro tiene "descripcionMotor: string".
//
// Y sin embargo, el Director los construye con los MISMOS pasos:
//   setMotor() → setAsientos() → setGps() → setComputadoraDeBordo()
//
// Esto demuestra que el patrón Builder separa la SECUENCIA de
// construcción del RESULTADO concreto. El Director solo conoce
// los pasos; los builders concretos deciden qué producir con ellos.
//
// ─────────────────────────────────────────────────────────────────

export class ManualDeCoche {

  // En lugar de piezas físicas, el manual almacena texto descriptivo.
  // Cada propiedad corresponde a un paso del builder, pero con un significado completamente distinto.
  descripcionMotor: string = "";
  descripcionAsientos: string = "";
  instruccionesGps: string = "";
  instruccionesComputadora: string = "";

  // Solo imprime los campos que fueron completados.
  // Si el Director no ejecutó un paso (ej: no llamó setComputadoraDeBordo),
  // ese campo queda vacío y simplemente no se muestra.
  // Así el manual refleja exactamente lo que se construyó, sin espacios vacíos.
  describir(): void {
    console.log("📖 Manual generado:");
    if (this.descripcionMotor)
      console.log(`   Motor    : ${this.descripcionMotor}`);
    if (this.descripcionAsientos)
      console.log(`   Asientos : ${this.descripcionAsientos}`);
    if (this.instruccionesGps)
      console.log(`   GPS      : ${this.instruccionesGps}`);
    if (this.instruccionesComputadora)
      console.log(`   Compu.   : ${this.instruccionesComputadora}`);
  }
}