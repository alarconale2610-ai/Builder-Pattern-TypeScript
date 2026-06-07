import { Casa } from "./Casa";

/**
 * INTERFAZ: CasaBuilder
 * ─────────────────────────────────────────────────────────────
 * Define el "contrato" que todo builder de casas debe cumplir.
 * Es la pieza central del patrón: garantiza que todos los builders
 * exponen exactamente los mismos pasos de construcción.
 *
 * VENTAJA CLAVE: El Director trabaja contra esta interfaz,
 * no contra una clase concreta. Esto significa que el Director
 * no sabe (ni le importa) si está construyendo una casa de madera
 * o una de diamante — simplemente llama a los mismos pasos.
 *
 * Cada método retorna `this` (el propio builder) para permitir
 * el encadenamiento de llamadas:
 *   builder.construirParedes().construirTecho().agregarPuertas(2)
 */
export interface CasaBuilder {
  construirParedes(): this;
  construirTecho(): this;
  agregarPuertas(cantidad: number): this;
  agregarVentanas(cantidad: number): this;
  agregarPiscina(): this;
  agregarJardin(): this;
  agregarGaraje(): this;

  /**
   * Entrega el producto terminado al cliente.
   * Después de llamar a este método, el builder se reinicia
   * internamente para poder construir un nuevo objeto desde cero.
   */
  obtenerCasa(): Casa;
}