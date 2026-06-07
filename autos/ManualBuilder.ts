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
import { ManualDeCoche } from "./ManualDeCoche";
import { VehiculoBuilder } from "./VehiculoBuilder";

export class ManualBuilder implements VehiculoBuilder {
  private manual: ManualDeCoche = new ManualDeCoche();
 
  setMotor(tipo: string): this {
    // En lugar de instalar, documenta el motor
    this.manual.descripcionMotor =
      `Instrucciones de mantenimiento para motor "${tipo}"`;
    return this;
  }
 
  setAsientos(cantidad: number): this {
    // En lugar de montar asientos, explica cómo ajustarlos
    this.manual.descripcionAsientos =
      `Guía de ajuste para ${cantidad} asientos`;
    return this;
  }
 
  setGps(): this {
    // En lugar de instalar el GPS, explica cómo usarlo
    this.manual.instruccionesGps =
      "Cómo configurar y usar el GPS integrado";
    return this;
  }
 
  setComputadoraDeBordo(): this {
    this.manual.instruccionesComputadora =
      "Panel de control: funciones y alertas";
    return this;
  }
 
  /**
   * Entrega el manual terminado al cliente.
   * Al igual que CocheBuilder, el cliente lo obtiene
   * directamente aquí — no a través del Director.
   */
  obtenerManual(): ManualDeCoche {
    const resultado = this.manual;
    this.manual = new ManualDeCoche();
    return resultado;
  }
}