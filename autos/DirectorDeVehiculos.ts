// ╔══════════════════════════════════════════════════════════════════╗
// ║  ARCHIVO 6 — DirectorDeVehiculos.ts                              ║
// ║  ROL EN EL PATRÓN: DIRECTOR (el "capataz de la obra")            ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ¿QUÉ HACE EL DIRECTOR?
// ───────────────────────
// Encapsula las "recetas" de construcción: sabe QUÉ pasos ejecutar
// y en QUÉ ORDEN para producir un tipo de vehículo determinado.
//
// Lo que el Director NO sabe:
//   ✗ Si está construyendo un coche físico o un manual de papel
//   ✗ Con qué materiales trabaja el builder
//   ✗ Qué tipo de objeto quedará al final
//
// Lo que el Director SÍ sabe:
//   ✓ Que el builder habla el "idioma" VehiculoBuilder
//   ✓ Qué pasos componen un "super deportivo" vs un "familiar"
//   ✓ El orden correcto de esos pasos
//
// ─────────────────────────────────────────────────────────────────


import { IVehiculoBuilder } from "./IVehiculoBuilder";

export class DirectorDeVehiculos {

  // ── RECETA 1: SUPER DEPORTIVO ───────────────────────────────────
  // El Director ejecuta estos 4 pasos sobre CUALQUIER builder que
  // implemente IVehiculoBuilder — no sabe ni le importa qué produce.
  construirCocheSuperDeportivo(builder: IVehiculoBuilder): void {
    builder
      .setMotor("V8 Turbo 600cv")
      .setAsientos(2)
      .setGps()
      .setComputadoraDeBordo();
  }

  // ── RECETA 2: FAMILIAR ──────────────────────────────────────────
  // El patrón Builder eliminando los "parámetros fantasma"
  // que plagan a los constructores telescópicos tradicionales.
  construirCocheFamiliar(builder: IVehiculoBuilder): void {
    builder
      .setMotor("1.6 TDI Eco")
      .setAsientos(5)
      .setGps();
  }
}