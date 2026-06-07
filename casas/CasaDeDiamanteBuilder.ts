import { Casa } from "./Casa";
import { CasaBuilder } from "./CasaBuilder";

/**
 * BUILDER CONCRETO: CasaDeDiamanteBuilder
 * ─────────────────────────────────────────────────────────────
 * Implementa los mismos pasos que CasaDeMaderaBuilder,
 * pero con materiales completamente distintos.
 *
 * PUNTO CLAVE PARA LA EXPOSICIÓN:
 * Comparar este archivo con CasaDeMaderaBuilder demuestra el poder
 * del patrón. El Director usará exactamente las mismas instrucciones
 * (construirCabana / construirMansion) con ambos builders,
 * pero el resultado será radicalmente diferente.
 *
 * Esto es lo que el video llama:
 * "con las mismas instrucciones, una casa de madera o un palacio de diamantes"
 */
export class CasaDeDiamanteBuilder implements CasaBuilder {
  private casa: Casa = new Casa();

  construirParedes(): this {
    // Mismo método, material completamente distinto
    this.casa.paredes = "Diamante puro reforzado";
    return this;
  }

  construirTecho(): this {
    this.casa.techo = "Bóveda de cristal y diamante";
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

  obtenerCasa(): Casa {
    const resultado = this.casa;
    this.casa = new Casa();
    return resultado;
  }
}