/* 
Cine
• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay

• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos

• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada

• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada

*/

/* 
1) Creo un método para inicializar el arreglo de
butacas (lógico) con valores booleanos al azar
 */

function cargarButacas(arreglo: boolean[], largo: number) {
  let indice: number;
  for (indice = 0; indice < largo; indice++) {
    arreglo[indice] = Math.floor(Math.random() * 2); //numero booleano al azar 0 o 1
  }
}
/* 2) Defino un método para contar las butacas libres y que las
retorne al invocador (por ej., el algoritmo principal) */

function contarButacasDesocupadas(arreglo: boolean[], largo: number): number {
  let desocupadas: number = 0;
  let indice: number;
  for (indice = 0; indice < largo; indice++) {
    if (arreglo[indice] == 0) {
      desocupadas++;
    }
  }
  return desocupadas;
}

let nroButacas: number = 100;
let butacas: boolean[] = new Array(nroButacas);
cargarButacas(butacas, nroButacas);
console.log(
  "El número de butacas desocupadas es: ",
  contarButacasDesocupadas(butacas, nroButacas)
);
