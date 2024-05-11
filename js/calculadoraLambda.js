const sumar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 + num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText = respuesta;
}


const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 - num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText = respuesta;
}


const multiplicar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 * num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText = respuesta;
}



const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 / num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText = respuesta;
}


function agregarElemento() {
    document.getElementById('idDivision').innerHTML = "<button >Nuevo</button>";
}


function quitarElemento() {
    document.getElementById('idDivision').innerHTML = "";
}

function conceptosJS() {
    /**tipos de datos en javaS  */

    /*let var const*/
    const IVA = 12;
    console.log(IVA);
    /**  IVA=15;
    console.log(IVA)  esto no se puede hacer*/


    /**este si puede ser editado ya no se usa mucho */
    var nombre = "Henry";
    console.log(nombre)
    nombre = "Israel"
    console.log(nombre)


    /**Maneja mejor la memoria */
    let apellido = "Coyago"
    console.log(apellido)
    apellido = "Reinoso"
    console.log(apellido)


    //Declaracion de arreglos 

    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana)
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[5]); //en el caso de que no es encuentre se sale undefined y que no existe elemento 

    diasSemana[5] = "sabado";
    console.log(diasSemana[5])
    diasSemana.push("domingo"); // hacer un add al array

    console.log(diasSemana);

    diasSemana.unshift("dias");
    console.log(diasSemana); //guardar mi elemento al inicio

    //los arreglos pueden ser de cualquier tipo de dato que quiera


    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares)

    const numerosImpares = [1, 3, 5, 7, 9];

    const numerosCompletos = numerosPares.concat(numerosImpares); //concatenar arreglos

    console.log(numerosCompletos);

    //SENTENCIAS DE CONTROL

    for (const dia of diasSemana) {
        console.log(dia);

        if (dia === "Viernes") {    //comparacion con === ya que compara con el tipo y contenido
            console.log("Por fin llego el fin de semana!!!!");

        }
    }


    if (diasSemana[8] === undefined) {  //hacer comparaciones con undefined
        console.log('No tiene valor');
    } else {
        console.log('Si tiene valor')
    }


    //MANEJO DE OBJETOS EN JAVASCRIPT

    //declaracion de objetos mediante json
    const estudiante = {   //esta variable no se cambiara por otro tipo pero si puedo modificar sus atributos
        nombre: "Henrik",
        apellido: "Coyago",
        edad: "564",
        genero: "M",
        ciudadNacimiento: "Cayambe"
    }

    console.log(estudiante);


    estudiante.nombre = "Isra";  //seteo
    console.log(estudiante);

    //tambien 

    const profesor = {
        nombre: "Hector",
        apellido: "Mendez",
        edad: 12,
        ciudadNacimiento: "Quito",
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "La Gasca",
            numeracion: "Oe3/59",
            barrio: "La Gasca"
        }


    }

    console.log(profesor);

    console.log(profesor.direccion.barrio);

    console.log(profesor.direccion.barrio = "MI Barrio");
    console.log(profesor);


    //Arreglos de objetos


    const estu1 = {
        nombre: "Pepe",
        apellido: "Lopez"
    }

    const estu2 = {
        nombre: "Pepa",
        apellido: "Lopez"
    }

    const estu3 = {
        nombre: "Pedro",
        apellido: "Lopez"
    }


    const estu4 = {
        nombre: "Peter",
        apellido: "Lopez"
    }


    const estudiantes = [estu1, estu2, estu3, estu4];

    console.log(estudiantes);

    console.table(estudiantes);

    console.log(estudiantes[1]);

    estudiantes[1].apellido = "cambiar apellido"
    console.table(estudiantes)

    const profesores = [{ nombre: "Endrik", edad: 45 }, { nombre: "Andrea", edad: 32 }]
    console.table(profesores);

    var prof = profesores.pop();  //siempre toma el ultimo elemento 
    console.log(prof);
    console.table(profesores);

    //DESESTRUCTURACION DE ARREGLOS 
    const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2;// desarmo a mi arreglo

    console.log(dia1);
    console.log(dia4);

    console.table(diasSemana2);

    const [d1, d2, d3, d4, d5] = ["Lunes_1", "Martes_2", "Miercoles_3", "Jueves_4", "Viernes_5"]; //desectruturar en una sola linea

    console.log(d2);
    console.log(d5);


    //DESESTRUCTURACION DE OBJETOS


    const vehiculo = {
        marca: "toyota",
        modelo: "supra",
        anio: 2018

    }

    const { marca, anio } = vehiculo;   //se usa llaves, y el nombre es de acuerdo al atributo que deseo obtener

    console.log(marca);
    console.log(anio);


    const { modelo } = {
        marca: "toyota",
        modelo: "supra",
        anio: 2018

    }


    console.log(modelo);



    //desestrurar de un objeto que tenga un atributo completo (objeto con objeto como atributo)



    const profesor1 = {
        nombre: "Hector",
        apellido: "Mendez",
        edad: 12,
        ciudadNacimiento: "Quito",
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "La Gasca",
            numeracion: "Oe3/59",
            barrio: "La Gasca"
        }


    }

    
    const { ciudadNacimiento, direccion } = profesor1;
    console.log(ciudadNacimiento);

    console.log(direccion);

    const {callePrincipal, barrio}=direccion;
    console.log(callePrincipal);
    console.log(barrio);



/*
const {nombre, direccion:{callePrincipal,barrio}}= profesor1; /// en un solol paso


console.log(barrio);
*/

}