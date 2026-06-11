// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 4 — CocheBuilder.ts                                     ║
// ║  ROL EN EL PATRÓN: BUILDER CONCRETO A                            ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ¿QUÉ HACE UN BUILDER CONCRETO?
// ────────────────────────────────
// Implementa cada paso definido en la interfaz IVehiculoBuilder
// y decide QUÉ hacer concretamente con cada instrucción.
//
// CocheBuilder traduce cada paso en ensamblaje físico:
//   setMotor("V8")  →  instala ese motor en el objeto Coche
//   setAsientos(2)  →  monta 2 asientos en el objeto Coche
//   setGps()        →  activa la propiedad gps = true
//
// El Director le da la "receta" (qué pasos y en qué orden).
// Este builder decide cómo ejecutar cada paso sobre el Coche.

import { Coche } from "./Coche";
import { IVehiculoBuilder } from "./IVehiculoBuilder";

export class CocheBuilder implements IVehiculoBuilder {

  // El coche en construcción vive aquí, dentro del builder.
  // El cliente y el Director nunca acceden a este objeto directamente
  // mientras se está ensamblando — garantiza que nadie recibe
  // un coche a medio construir (integridad del producto).
  private coche: Coche = new Coche();

  // ── PASO 1 ─────────────────────────────────────────────────────
  // Instala el motor físico en el coche.
  // Devuelve "this" para permitir encadenamiento:
  //   builder.setMotor("V8").setAsientos(2).setGps()
  setMotor(tipo: string): this {
    this.coche.motor = tipo;
    return this;
  }

  // ── PASO 2 ─────────────────────────────────────────────────────
  // Monta la cantidad de asientos indicada.
  setAsientos(cantidad: number): this {
    this.coche.asientos = cantidad;
    return this;
  }

  // ── PASO 3 ─────────────────────────────────────────────────────
  // Activa el GPS. Sin parámetros: es sí o no, y aquí es "sí".
  setGps(): this {
    this.coche.gps = true;
    return this;
  }

  // ── PASO 4 ─────────────────────────────────────────────────────
  // Activa la computadora de a bordo.
  setComputadoraDeBordo(): this {
    this.coche.computadoraDeBordo = true;
    return this;
  }

  // ── OBTENER EL RESULTADO ────────────────────────────────────────
  // Este método NO forma parte de IVehiculoBuilder — es exclusivo
  // de CocheBuilder. Por eso el cliente debe llamarlo directamente
  // aquí, y no a través del Director.
  //
  // ¿Por qué el Director no puede devolver el coche?
  //   Porque el Director solo conoce IVehiculoBuilder, que no tiene
  //   ningún método "obtener". No sabe si construyó un coche o un manual.
  //
  // Después de entregar el coche, se crea un Coche nuevo vacío
  // para que este mismo builder pueda usarse en una próxima construcción
  // sin mezclar los datos de la anterior. ¡Listo para reutilizar!
  obtenerCoche(): Coche {
    const resultado = this.coche;
    this.coche = new Coche(); // reinicio: el builder queda limpio
    return resultado;
  }
}