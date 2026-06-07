/**
 * PRODUCTO A: Coche
 * ─────────────────────────────────────────────────────────────
 * Representa el vehículo físico que se ensambla.
 *
 * En el ejemplo de autos del video, este producto y ManualDeCoche
 * NO comparten una interfaz común — son objetos completamente
 * distintos. Eso tiene una consecuencia importante en cómo
 * el cliente obtiene el resultado (ver CocheBuilder.obtenerCoche()).
 */
export class Coche {
  motor: string = "";
  asientos: number = 0;
  gps: boolean = false;
  computadoraDeBordo: boolean = false;

  describir(): void {
    console.log("🚗 Coche ensamblado:");
    console.log(`   Motor              : ${this.motor}`);
    console.log(`   Asientos           : ${this.asientos}`);
    console.log(`   GPS                : ${this.gps ? "Sí" : "No"}`);
    console.log(`   Computadora a bordo: ${this.computadoraDeBordo ? "Sí" : "No"}`);
  }
}