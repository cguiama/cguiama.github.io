//variaveis

let textoFinal
let textArea
let resultado = ""

// ↓↓ criar função para a mensagem piscar ↓↓
function blink() {
    let msg = document.getElementById("info");
    setInterval(function () {
        msg.style.visibility = (msg.style.visibility == 'hidden' ? '' : 'hidden');
    }, 1000);
}

//função irá carregar blink quando nao permitido
// ↑↑ criar função para a mensagem piscar ↑↑


function codificar(texto) {
    let letras = texto.value.split("");

    letras.forEach(function (item, i) {
        if (item == "a") {
            letras[i] = "ai";
        } else if (item == "e") {
            letras[i] = "enter";
        } else if (item == "i") {
            letras[i] = "imes";
        } else if (item == "o") {
            letras[i] = "ober";
        } else if (item == "u") {
            letras[i] = "ufat";
        }
    })
    return letras.join("");
}

function decodificar(texto) {
    let codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.value;

    for (let i = 0; i < codigo.length; i++) {
        if (texto.includes(codigo[i][1])) {
            texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return texto;
}

function mostraCodificado() {
    document.getElementById("conteudo").style.display = "none"
    resultado = document.getElementById("resultado")
    textArea = document.querySelector(".criptografia");
    textoFinal = codificar(textArea);
    resultado.style.display = "flex"

    if (/[A-Z-À-Ú-à-ù]/.test(textoFinal)) {
        resultado.innerHTML = 'Ops! Você usou letras maiúsculas ou com acentos.'
    } else if (textoFinal === "") {
        resultado.innerHTML = 'Você precisa digitar um texto para ser criptografado!'
    }
    else {
        resultado.innerHTML = textoFinal;
        document.getElementById("botao3").style.display = "flex";
    }
}

function mostraDecodificado() {
    document.getElementById("conteudo").style.display = "none"
    resultado = document.getElementById("resultado")
    textArea = document.querySelector(".criptografia");
    textoFinal = decodificar(textArea);
    resultado.style.display = "flex"

    if (/[A-Z-À-Ú-à-ù]/.test(textoFinal)) {
        resultado.innerHTML = 'Ops! Você usou letras maiúsculas ou com acentos.'
    } else if (textoFinal === "") {
        resultado.innerHTML = 'Você precisa digitar um texto para ser descriptografado!'
    }
    else {
        resultado.innerHTML = textoFinal;
    }
}

function btnCopiar() {
    resultado = document.getElementById("resultado")
    textArea = document.querySelector(".criptografia");

    var copyText = resultado.innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
        resultado.innerHTML = "Copiado!";
    });
}




