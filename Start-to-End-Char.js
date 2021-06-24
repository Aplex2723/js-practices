const contenedor = document.querySelector('.contenido')

document.addEventListener('DOMContentLoaded', capturarCadena)

let cadena;
function capturarCadena() {
    cadena = window.prompt('Escribe la cadena')

    if(cadena === '' || typeof cadena === 'object' ){
        console.log('error')

        location.reload()
    } 

    console.log(cadena)
    let valor;
    
    for(let i = 0; i < cadena.length; i++){

        while (i < cadena.length){

            valor = cadena[0]
            cadena = cadena.substr(1)

            break;
        }

        cadena = cadena.concat(valor)

        console.log(cadena)

        let guardarDatos = (cadena) => {
            datos = [...datos, cadena]
        }

        guardarDatos(cadena)
    }

    imprimirHTML(datos)
    console.log(datos)

}
let datos = [];

function imprimirHTML(data) {

    const titulo = document.createElement('h1');
    titulo.textContent = `Resultados de ${cadena}`

    contenedor.appendChild(titulo)
 
    data.forEach(dato => {

        const parrafo = document.createElement('p');
        parrafo.textContent = dato

        contenedor.appendChild(parrafo)
       
    })

}
