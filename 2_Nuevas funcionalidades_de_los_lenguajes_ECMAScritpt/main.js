import { Junior, SemiSenior, Senior } from  './Empleados.js';
//import Empleados from './Empleados';

const empleado1 = new Junior (`Paul`,`Buitron`, 2500, 1, 1)
const empleado2 = new SemiSenior (`Alberto`,`Ramirez`, 5500, 3, 3)
const empleado3 = new Senior (`Alberto`,`El Canario`, 7500, 5, 8)

console.log(empleado1)
console.log(empleado2)
console.log(empleado3)

empleado1.aumentarSueldo()
empleado2.aumentarSueldo()
empleado3.aumentarSueldo()

empleado1.trabajar()
empleado2.asignarTarea(empleado1)
empleado3.asignarProyecto(empleado2)