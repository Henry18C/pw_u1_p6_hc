const sumar = (idNum1, idNum2)=>{
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 +num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;
}


const restar = (idNum1, idNum2)=>{
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 -num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;
}


const multiplicar = (idNum1, idNum2)=>{
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 *num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;
}



const dividir = (idNum1, idNum2)=>{
    var num1 = parseInt(document.getElementById(idNum1).value) ;
    var num2 = parseInt(document.getElementById(idNum2).value);
    var respuesta= num1 /num2;
    console.log(respuesta)
    document.getElementById("idResultado").innerText=respuesta;
}


function agregarElemento(){
    document.getElementById('idDivision').innerHTML= "<button >Nuevo</button>";
}


function quitarElemento(){
    document.getElementById('idDivision').innerHTML= "";
}

function conceptosJS(){
    /**tipos de datos en javaS  */

    /*let var const*/
    const IVA=12;
    console.log(IVA);
    /**  IVA=15;
    console.log(IVA)  esto no se puede hacer*/


    /**este si puede ser editado ya no se usa mucho */
    var nombre= "Henry";
    console.log(nombre)
    nombre="Israel"
    console.log(nombre)


    /**Maneja mejor la memoria */
    let apellido= "Coyago"
    console.log(apellido)
    apellido= "Reinoso"
    console.log(apellido)

    


   

}