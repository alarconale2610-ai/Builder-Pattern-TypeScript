/**
 * PRODUCTO: Casa
 * ─────────────────────────────────────────────────────────────
 * Esta clase representa el objeto complejo que queremos construir.
 * En el patrón Builder, el "producto" es el resultado final.
 *
 * ¿Por qué no inicializamos todo en el constructor de esta clase?
 * Porque si lo hiciéramos, terminaríamos con el "constructor monstruoso"
 * lleno de parámetros opcionales que el video menciona.
 * En su lugar, delegamos esa responsabilidad al Builder.
 */
export class Casa {
  // Cada propiedad tiene un valor por defecto seguro.
  // El Builder se encargará de asignar los valores reales,
  // solo para los pasos que el cliente solicite.
  paredes: string = "";
  techo: string = "";
  puertas: number = 0;
  ventanas: number = 0;
  piscina: boolean = false;
  jardin: boolean = false;
  garaje: boolean = false;

  /**
   * Muestra un resumen del producto terminado.
   * En un proyecto real, aquí podría ir lógica de negocio
   * (calcular precio, validar estructura, etc.).
   */
  describir(): void {
    console.log("🏠 Casa construida:");
    console.log(`   Paredes : ${this.paredes}`);
    console.log(`   Techo   : ${this.techo}`);
    console.log(`   Puertas : ${this.puertas}`);
    console.log(`   Ventanas: ${this.ventanas}`);
    console.log(`   Piscina : ${this.piscina ? "Sí" : "No"}`);
    console.log(`   Jardín  : ${this.jardin ? "Sí" : "No"}`);
    console.log(`   Garaje  : ${this.garaje ? "Sí" : "No"}`);
  }
}