import { CasaBuilder } from "./CasaBuilder";

/**
 * DIRECTOR: DirectorDeCasas
 * ─────────────────────────────────────────────────────────────
 * El Director es el "capataz de la obra". Su único trabajo es
 * saber en qué orden ejecutar los pasos del builder.
 *
 * QUÉ SABE el Director:
 *   ✓ Qué pasos ejecutar
 *   ✓ En qué orden lógico (ej: no pone techo antes que paredes)
 *
 * QUÉ NO SABE el Director:
 *   ✗ Con qué materiales trabaja el builder
 *   ✗ Qué tipo de casa se está construyendo
 *   ✗ Cómo está implementado cada paso internamente
 *
 * CÓMO SE CONECTA CON EL BUILDER — el método setBuilder():
 * ─────────────────────────────────────────────────────────────
 * setBuilder() es el puente entre el Director y el Builder.
 * Permite "enchufar" cualquier builder concreto al director
 * en tiempo de ejecución, sin cambiar una sola línea del director.
 *
 * Ejemplo de uso:
 *   director.setBuilder(new CasaDeMaderaBuilder());
 *   director.construirMansion(); // → mansión de madera
 *
 *   director.setBuilder(new CasaDeDiamanteBuilder());
 *   director.construirMansion(); // → mansión de diamante
 *
 * Esto es el principio ABIERTO/CERRADO en acción:
 * el Director está cerrado a modificaciones pero abierto
 * a extensión (se le pueden dar nuevos builders sin tocarlo).
 */
export class DirectorDeCasas {
  /**
   * Referencia al builder activo.
   * Al ser de tipo `CasaBuilder` (interfaz), el director
   * puede trabajar con CUALQUIER implementación concreta.
   */
  private builder!: CasaBuilder;

  /**
   * setBuilder() — "Enchufar" un builder al director
   * ─────────────────────────────────────────────────
   * Este método es la clave de la flexibilidad del patrón.
   * Al llamarlo, le decimos al director CON QUIÉN va a trabajar.
   *
   * El cliente puede cambiar el builder en cualquier momento,
   * incluso entre dos construcciones consecutivas.
   *
   * @param builder Cualquier clase que implemente CasaBuilder
   */
  setBuilder(builder: CasaBuilder): void {
    this.builder = builder;
  }

  /**
   * Receta para una cabaña mínima.
   * Solo ejecuta los pasos esenciales — sin extras opcionales.
   * El cliente no envía nulos para piscina o jardín: simplemente
   * no llama a esos pasos. Eso es lo que elimina el "constructor monstruoso".
   */
  construirCabana(): void {
    this.builder
      .construirParedes()
      .construirTecho()
      .agregarPuertas(1)
      .agregarVentanas(2);
  }

  /**
   * Receta para una mansión completa.
   * Mismos pasos base, más todos los extras disponibles.
   * El orden importa: siempre paredes y techo antes que los adicionales.
   */
  construirMansion(): void {
    this.builder
      .construirParedes()
      .construirTecho()
      .agregarPuertas(5)
      .agregarVentanas(12)
      .agregarPiscina()
      .agregarJardin()
      .agregarGaraje();
  }
}