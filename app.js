const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const copia = document.querySelector(".btn-copiar")
copia.style.display = "none";

function btnEncriptar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    copia.style.display = "block"
}

function btnDesencriptar(){
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function copiar(){
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
    mensagem.value = "";
    alert("Texto Copiado")
}

function criptografar(stringEncriptada){
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

}

function descriptografar(stringDesencriptada){
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
(stringDesencriptada) =(stringDesencriptada).toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if((stringDesencriptada).includes(matrizCodigo[i][1])){
        (stringDesencriptada) =(stringDesencriptada).replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return(stringDesencriptada);
}

