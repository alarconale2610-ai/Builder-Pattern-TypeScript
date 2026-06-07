/**
 * INTERFAZ: VehiculoBuilder
 * ─────────────────────────────────────────────────────────────
 * Define los pasos comunes para construir CUALQUIER cosa
 * relacionada con un vehículo: puede ser el auto físico,
 * su manual, su ficha técnica, su presupuesto, etc.
 *
 * DIFERENCIA CON CasaBuilder:
 * Aquí los métodos se llaman con "set" en lugar de "construir/agregar".
 * Esto es una convención habitual cuando los pasos son configuraciones
 * de propiedades individuales, sin un orden estrictamente obligatorio.
 *
 * ¿QUÉ SIGNIFICA "set" EN EL NOMBRE DEL MÉTODO?
 * ─────────────────────────────────────────────────────────────
 * "set" viene del inglés "setter" y significa "establecer" o "configurar".
 * Un método set simplemente asigna un valor a una propiedad del objeto.
 *
 * Ejemplos:
 *   setMotor("V8")     → establece qué motor tendrá el vehículo
 *   setAsientos(5)     → establece cuántos asientos tendrá
 *   setGps()           → activa la opción de GPS
 *
 * En este contexto, cada "set" es un paso de construcción que
 * configura una característica del producto final.
 * El builder decide internamente qué hacer con esa configuración:
 *   - CocheBuilder → instala el componente físico
 *   - ManualBuilder → escribe la documentación de ese componente
 */
export interface VehiculoBuilder {
  /**
   * Configura el tipo de motor del vehículo.
   * @param tipo Descripción del motor (ej: "V8 Turbo 600cv")
   */
  setMotor(tipo: string): this;

  /**
   * Configura la cantidad de asientos.
   * @param cantidad Número de asientos (ej: 2 para deportivo, 5 para familiar)
   */
  setAsientos(cantidad: number): this;

  /**
   * Activa el sistema de GPS en el vehículo.
   * No recibe parámetros porque es una opción de sí/no.
   */
  setGps(): this;

  /**
   * Activa la computadora de a bordo.
   */
  setComputadoraDeBordo(): this;
}