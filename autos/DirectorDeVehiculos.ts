import { VehiculoBuilder } from "./VehiculoBuilder";

/**
 * DIRECTOR: DirectorDeVehiculos
 * ─────────────────────────────────────────────────────────────
 * Conoce las "recetas" para distintos tipos de vehículos
 * y las ejecuta en el orden correcto sobre cualquier builder.
 *
 * DIFERENCIA CON DirectorDeCasas:
 * En este Director no hay setBuilder(). Aquí el builder se pasa
 * directamente como parámetro de cada método de construcción.
 *
 * Ambos enfoques son válidos en el patrón Builder:
 *   • setBuilder()        → útil cuando el director construye muchos
 *                           objetos seguidos con el mismo builder
 *   • builder por param   → útil cuando cada llamada puede usar
 *                           un builder diferente de forma más explícita
 *
 * En este caso, pasar el builder por parámetro deja muy claro
 * en el código cliente cuál builder se usa en cada llamada.
 */
export class DirectorDeVehiculos {
  /**
   * Construye la configuración de un coche super deportivo.
   * Motor potente, pocos asientos, máxima tecnología.
   *
   * @param builder Puede ser CocheBuilder (produce el auto)
   *                o ManualBuilder (produce el manual del auto).
   *                El Director no distingue entre ellos.
   */
  construirCocheSuperDeportivo(builder: VehiculoBuilder): void {
    builder
      .setMotor("V8 Turbo 600cv")
      .setAsientos(2)
      .setGps()
      .setComputadoraDeBordo();
  }

  /**
   * Construye la configuración de un coche familiar.
   * Motor eficiente, más asientos, sin computadora de a bordo.
   *
   * @param builder Cualquier implementación de VehiculoBuilder.
   */
  construirCocheFamiliar(builder: VehiculoBuilder): void {
    builder
      .setMotor("1.6 TDI Eco")
      .setAsientos(5)
      .setGps();
      // Sin computadora de a bordo — no se llama ese paso,
      // no se necesita enviar null ni ningún valor vacío.
  }
}