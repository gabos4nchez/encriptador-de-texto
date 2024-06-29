//Encripta el texto utilizando expreciones regulares
function encriptar(texto) {
    let encriptado = texto.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        };
    });
    asignarTextoId("mensaje", encriptado);
    return;
};

//Desencripta el texto utilizando expresiones regulares
function desencriptar(texto) {
    let desencriptado = texto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    asignarTextoId("mensaje", desencriptado);
    return;
}

//Copia el texto encriptado o desencriptado al portapeles
function copiarAlPortapapeles() {
    let texto = document.getElementById('mensaje').innerText; 
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    alert('Texto copiado al portapapeles');
}

//Valida todas las condiciones iniciales del ejercicio
function validarCondiciones(accion){
    let campoTexto = document.getElementById("texto").value;
    
    if(campoTexto == "") {
        asignarTextoId("condicion", "<i class='fa-solid fa-circle-info'></i> Por favor ingrese un texto en el campo.");
    }else if(condiciones(campoTexto)) {
        asignarTextoId("condicion", "<i class='fa-solid fa-circle-info'></i> El texto no debe tener letras mayusculas, letras con acentos o caracteres especiales.");
    }else{
        mostrarElemento();
        ocultarElemento();
        if(accion === "encriptar") {
            encriptar(campoTexto);
        } else if (accion === "desencriptar") {
            desencriptar(campoTexto);
        }
    };
    return;
};

//Envia un mensaje al usuario con el error que esta cometiendo
function asignarTextoId(id, texto){
    let titulo = document.getElementById(id);
    titulo.innerHTML = texto;
    return;
};

//Valida si en el texto existen letras mayusculas, con acentos o caracteres especiales
function condiciones(texto) {
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] < "a" && texto[i] != " " || texto[i] > "z") {
            return true;
        }
    }
    return false;
};

//Remueve una clase a un elemento
function mostrarElemento() {
    var elemento = document.getElementById('oculto');
    elemento.classList.remove('oculto');
}

//Añade una clase a un elemento y lo oculta junto con el css
function ocultarElemento() {
    var elemento = document.getElementById('presente');
    elemento.classList.add('oculto');
}