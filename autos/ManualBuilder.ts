// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 5 — ManualBuilder.ts                                    ║
// ║  ROL EN EL PATRÓN: BUILDER CONCRETO B                            ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// LA DEMOSTRACIÓN MÁS PODEROSA DEL PATRÓN EN ESTE EJEMPLO
// ─────────────────────────────────────────────────────────
// ManualBuilder implementa los MISMOS 4 pasos que CocheBuilder,
// pero en lugar de ensamblar piezas físicas, redacta documentación.
//
// Comparación directa:
//
//   CocheBuilder.setMotor("V8 Turbo")
//     → coche.motor = "V8 Turbo"           (instala el motor)
//
//   ManualBuilder.setMotor("V8 Turbo")
//     → manual.descripcionMotor =
//         "Instrucciones de mantenimiento   (escribe el texto)
//          para motor V8 Turbo"
//
// El Director llama a setMotor("V8 Turbo") sin saber cuál
// de los dos builders tiene enfrente. Eso es polimorfismo
// aplicado al patrón Builder.

import { ManualDeCoche } from "./ManualDeCoche";
import { IVehiculoBuilder } from "./IVehiculoBuilder";

export class ManualBuilder implements IVehiculoBuilder {

  // Igual que CocheBuilder, el producto en construcción vive
  // aquí privado, protegido del mundo exterior mientras se arma.
  private manual: ManualDeCoche = new ManualDeCoche();

  // ── PASO 1 ─────────────────────────────────────────────────────
  // En vez de instalar, documenta: genera el texto de mantenimiento
  // para el tipo de motor recibido.
  setMotor(tipo: string): this {
    this.manual.descripcionMotor =
      `Instrucciones de mantenimiento para motor "${tipo}"`;
    return this;
  }

  // ── PASO 2 ─────────────────────────────────────────────────────
  // En vez de montar, explica: redacta la guía de ajuste de asientos.
  setAsientos(cantidad: number): this {
    this.manual.descripcionAsientos =
      `Guía de ajuste para ${cantidad} asientos`;
    return this;
  }

  // ── PASO 3 ─────────────────────────────────────────────────────
  // En vez de instalar el hardware GPS, escribe cómo usarlo.
  setGps(): this {
    this.manual.instruccionesGps =
      "Cómo configurar y usar el GPS integrado";
    return this;
  }

  // ── PASO 4 ─────────────────────────────────────────────────────
  // Documenta el panel de control de la computadora de a bordo.
  setComputadoraDeBordo(): this {
    this.manual.instruccionesComputadora =
      "Panel de control: funciones y alertas";
    return this;
  }

  // ── OBTENER EL RESULTADO ────────────────────────────────────────
  // Mismo patrón que CocheBuilder: método exclusivo de esta clase,
  // fuera de la interfaz, por eso el cliente lo llama directamente.
  // Tras entregar el manual, se reinicia para la próxima construcción.
  obtenerManual(): ManualDeCoche {
    const resultado = this.manual;
    this.manual = new ManualDeCoche(); // reinicio: listo para reutilizar
    return resultado;
  }
}