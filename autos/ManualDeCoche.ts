/**
 * PRODUCTO B: ManualDeCoche
 * ─────────────────────────────────────────────────────────────
 * Representa el manual de papel que documenta el vehículo.
 *
 * No tiene nada que ver con la clase Coche a nivel de código,
 * pero se construye siguiendo exactamente los mismos pasos.
 * Eso demuestra que el patrón Builder puede producir objetos
 * completamente distintos a partir de la misma secuencia de instrucciones.
 *
 * PUNTO CLAVE PARA LA EXPOSICIÓN:
 * Mientras CocheBuilder ensambla un motor físico,
 * ManualBuilder escribe la documentación de ese motor.
 * El Director no sabe cuál de los dos está haciendo.
 */
export class ManualDeCoche {
  descripcionMotor: string = "";
  descripcionAsientos: string = "";
  instruccionesGps: string = "";
  instruccionesComputadora: string = "";

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