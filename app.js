navigator.clipboard.writeText
let mensaje_no_texto = document.getElementById('mensaje_no_texto');
let texto_input = document.getElementById('Texto_entrada_input');
let instruccion = document.getElementById('Instruccion');
let display = document.getElementById('display');
const TEXTO_PLACEHOLDER = 'Ingrese texto Aquí';

function validarTexto(texto) {
    // verificar solo letras minúsculas y sin acentos
    const regex = /^[a-z\s]+$/;
}



function borrarInstruccion() {
    var instruccion = document.getElementById("Texto_entrada_input");
    instruccion.style.display = "none"; // Oculta la instrucción
}
    
function borrarPlaceholder() {
    var input = document.getElementById("Texto_entrada_input");
    input.placeholder = "";  // Borra el placeholder cuando el campo es enfocado
}

function restaurarPlaceholder() {
    var input = document.getElementById("Texto_entrada_input");
    if (input.value === "") {
        input.placeholder = "Ingrese texto Aquí";
    }
}



document.getElementById("Texto_entrada_input").addEventListener("input", function() {
    var input = document.getElementById("Texto_entrada_input").value;
    var mensajeNoTexto = document.getElementById("mensaje_no_texto");
    var instruccion = document.getElementById("Instruccion");
    var textoMostrado = document.getElementById("texto_mostrado");
    var imagenDisplay = document.getElementById("imagen_display");


    this.style.height = 'auto'; // Resetear altura
    this.style.height = (this.scrollHeight) + 'px'; // Ajustar altura a contenido


    if (input.trim() !== "") {
        // Muestra el texto en la zona de display y oculta los mensajes
        imagenDisplay.style.display = window.innerWidth <= 1200 ? "none" : "none";
        mensajeNoTexto.style.display = "none";
        instruccion.style.display = "none";
        textoMostrado.textContent = input;
        
    } else {
        // Muestra los mensajes cuando el campo está vacío
        imagenDisplay.style.display = window.innerWidth <= 1200 ? "none" : "block";
        mensajeNoTexto.style.display = "block";
        instruccion.style.display = "block";
        textoMostrado.textContent = "";
    }
})




function mostrarBotonCopiar() {
    const input = document.getElementById('Texto_entrada_input');
    const botonCopiar = document.getElementById('boton_copiar');

    if (input.value.trim() !== '') {
        botonCopiar.style.display = 'block';
    } else {
        botonCopiar.style.display = 'none';
    }
}

const inputField = document.getElementById("Texto_entrada_input");
const displayArea = document.getElementById("display");
const botonCopiar = document.getElementById("boton_copiar");

inputField.addEventListener("input", function() {
    if (inputField.value.trim() !== "") {
        displayArea.style.height = "37.1875rem";
        displayArea.style.width = "21.4375rem";
        botonCopiar.style.display = "block"; // Muestra el botón 'Copiar' cuando hay texto
    } else {
        displayArea.style.height = "auto"; // Restablece la altura original
        displayArea.style.width = "100%"; // Restablece el ancho original
        botonCopiar.style.display = "none"; // Oculta el botón 'Copiar' cuando no hay texto
    }
});

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function manejarEncriptacion() {
    const input = document.getElementById("Texto_entrada_input").value; // Obtiene el valor del input
    const textoEncriptado = encriptarTexto(input); // Encripta el texto
    document.getElementById("texto_mostrado").textContent = textoEncriptado; // Muestra el texto encriptado en el área de display
}

function manejarDesencriptacion() {
    const input = document.getElementById("Texto_entrada_input").value;
    const textoDesencriptado = desencriptarTexto(input);
    document.getElementById("texto_mostrado").textContent = textoDesencriptado;
    
}

document.querySelector(".boton_encriptar").addEventListener("click", manejarEncriptacion);
document.querySelector(".boton_desencriptar").addEventListener("click", manejarDesencriptacion);

function copiarTexto() {
    const textoMostrado = document.querySelector('.texto_mostrado').innerText;
    navigator.clipboard.writeText(textoMostrado).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

document.querySelector('.boton_copiar').addEventListener('click', function() {
    copiarTexto();
});


