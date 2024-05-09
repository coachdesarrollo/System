function init(){
  const actions = {
    "añadir": añadir,
    "eliminar": eliminar,
    "limpiar": limpiar
  };
  
  Object.keys(actions).forEach(action => {
    document.getElementById(action).addEventListener("click", actions[action]);
  });
 };



// Funcion de añadir
function añadir() {
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

    if(clave) {
        //Mostrar mensaje de confirmacion
        const message = localStorage.getItem(clave) ? " Se edito el registro " : " Se añadio el registro ";
        
        // Añadir el valor al local storage
        localStorage.setItem(clave, valor); 

        // Añadir los valores 
    } else {
        document.getElementById("mensaje").innerHTML = "<p> La clave tiene que tener un valor </p>";
    };
};















window.onload = init;





// El metodo Object devuelve un array
//Object.keys() Devuele el array con las claves de un objeto

// Obteniendo las claves de un objeto simple


// console.log(Object.keys(persona));

//  Iterando sobre las claves de un objeto
// Object.keys(persona).forEach(clave => {
//     console.log(` La clave es: ${clave} y el valor es : ${persona[clave]}`);
// });

// Comprobando si un objeto tiene ciertas claves
// if(Object.keys(persona).includes("edad")) {
//     console.log(" La persona tiene una edad definida ")
// } else {
    //     console.log(" La edad no esta definida ")
// }


//  Usando Object.keys()con objetos anidados
// const persona =  {
//     nombre: " Sam",
//     edad: "100",
// informacionPersonal: {
//     direccion: " Cra 46-74 ",
//     telefono : "3182737884"
//    }
// };

// Object.keys(persona).forEach(clave => {
//     if(typeof persona[clave] === "object") {
//         console.log(` La clave "${clave}" tiene un objeto como valor.`)
//     } else {
//         console.log(` La clave "${clave}" tiene un valor de tipo ${typeof persona[clave]}.`)
//     }
// });