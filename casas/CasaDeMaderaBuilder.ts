import { Casa } from "./Casa";
import { CasaBuilder } from "./CasaBuilder";

/**
 * BUILDER CONCRETO: CasaDeMaderaBuilder
 * ─────────────────────────────────────────────────────────────
 * Implementa los pasos de construcción para una casa de madera.
 * Cada paso sabe exactamente qué material usar y cómo configurarlo.
 *
 * Aquí reside la lógica específica de construcción, separada
 * de la clase Casa (que solo representa el producto) y del
 * Director (que solo conoce el orden de los pasos).
 *
 * Si mañana se cambia el tipo de madera o el estilo del techo,
 * solo se modifica este archivo — nada más.
 */
export class CasaDeMaderaBuilder implements CasaBuilder {
  /**
   * El producto se guarda como estado interno del builder.
   * Está marcado como `private` para que ningún código externo
   * pueda acceder a la casa mientras está a medio construir.
   * Solo se entrega cuando el cliente llama a obtenerCasa().
   */
  private casa: Casa = new Casa();

  construirParedes(): this {
    // Cada paso asigna los valores concretos al producto parcial
    this.casa.paredes = "Madera de pino";
    return this; // Retornamos `this` para permitir encadenamiento
  }

  construirTecho(): this {
    this.casa.techo = "Tejas de madera";
    return this;
  }

  agregarPuertas(cantidad: number): this {
    this.casa.puertas = cantidad;
    return this;
  }

  agregarVentanas(cantidad: number): this {
    this.casa.ventanas = cantidad;
    return this;
  }

  agregarPiscina(): this {
    this.casa.piscina = true;
    return this;
  }

  agregarJardin(): this {
    this.casa.jardin = true;
    return this;
  }

  agregarGaraje(): this {
    this.casa.garaje = true;
    return this;
  }

  /**
   * Entrega el producto terminado y reinicia el builder.
   *
   * El reinicio es importante: permite reutilizar el mismo builder
   * para construir múltiples casas, sin necesidad de crear
   * una nueva instancia cada vez.
   */
  obtenerCasa(): Casa {
    const resultado = this.casa;
    this.casa = new Casa(); // reinicio para la próxima construcción
    return resultado;
  }
}