import { Coche } from "./Coche";
import { VehiculoBuilder } from "./VehiculoBuilder";

/**
 * BUILDER CONCRETO A: CocheBuilder
 * ─────────────────────────────────────────────────────────────
 * Implementa VehiculoBuilder para producir un Coche físico.
 * Cada método "set" instala o configura el componente real del auto.
 *
 * NOTA IMPORTANTE — ¿Por qué no hay setBuilder() aquí?
 * En el ejemplo de casas, el Director usaba setBuilder() para
 * "enchufarse" al builder. En este ejemplo de autos el Director
 * recibe el builder directamente por parámetro en cada método.
 * Ambas son formas válidas de conectar Director con Builder.
 *
 * CÓMO OBTIENE EL CLIENTE EL RESULTADO:
 * Como Coche y ManualDeCoche no comparten interfaz, el Director
 * no puede devolver el producto — no sabe qué tipo es.
 * Por eso el cliente llama a obtenerCoche() directamente en
 * esta clase, después de que el Director terminó su trabajo.
 */
export class CocheBuilder implements VehiculoBuilder {
  private coche: Coche = new Coche();

  setMotor(tipo: string): this {
    // Instala el motor físico en el coche
    this.coche.motor = tipo;
    return this;
  }

  setAsientos(cantidad: number): this {
    this.coche.asientos = cantidad;
    return this;
  }

  setGps(): this {
    this.coche.gps = true;
    return this;
  }

  setComputadoraDeBordo(): this {
    this.coche.computadoraDeBordo = true;
    return this;
  }

  /**
   * Entrega el coche terminado al cliente.
   *
   * El cliente debe llamar a este método DESPUÉS de que el Director
   * haya terminado de ejecutar todos los pasos de construcción.
   * No puede pedírselo al Director porque el Director no conoce
   * el tipo de producto específico.
   */
  obtenerCoche(): Coche {
    const resultado = this.coche;
    this.coche = new Coche(); // reinicio para la próxima construcción
    return resultado;
  }
}