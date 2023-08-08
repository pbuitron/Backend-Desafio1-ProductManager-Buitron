export class Empleados {
    constructor(nombre, apellido, sueldo, experiencia, antigüedad,) {
        this.nombre = nombre
        this.apellido = apellido
        this.sueldo = sueldo
        this.experiencia = experiencia
        this.antigüedad = antigüedad
    }
    trabajar() {
        console.log(`Estoy en horario de trabajo`)
    }

    cobrarSueldo() {
        console.log(`Ya cobramos sueldo`)
    }

    aumentarSueldo() {

    }
}

//Herencia

export class Junior extends Empleados {
    constructor(nombre, apellido, sueldo, experiencia, antigüedad,) {
        super(nombre, apellido, sueldo, experiencia, antigüedad,)
        this.tareasAsignadas = []
    }

    aumentarSueldo() {
        console.log(`Aumento 15% sobre la basé anterior`)
    }
}

export class SemiSenior extends Empleados {
    constructor(nombre, apellido, sueldo, experiencia, antigüedad,) {
        super(nombre, apellido, sueldo, experiencia, antigüedad)
        this.proyectosAsignados = []
    }
    aumentarSueldo() {
        console.log(`Aumento 25% sobre la base`)
    }

    asignarTarea(junior){
    console.log(`Asigno tarea a Junior`)
    }

}

export class Senior extends Empleados {
    constructor(nombre,apellido,sueldo,experiencia,antigüedad) {
        super(nombre,apellido,sueldo,experiencia,antigüedad);
        this.proyectosLiderados = []
    }
    aumentarSueldo() {
        console.log(`Aumento 45% sobre la base`)
    }

    asignarProyecto(empleado){
    console.log(`Se asigno nuevo proyecto a ${empleado.nombre} `)
    }

}

//export default Empleados