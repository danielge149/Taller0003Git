document.addEventListener("DOMContentLoaded", function () {

    var tela = document.getElementById("tela");

    //Array de elementos que receber uma listener
    var listenerBtn = [];

    //teclas adicionais do teclado
    var btnResultado = document.getElementById("resultado");
    var btnLimparTela = document.getElementById("limparTela");
    var btnApagarAnterior = document.getElementById("apagarAnterior");

    listenerBtn.push(document.getElementById("ponto"));

    //teclas dos operadores
    listenerBtn.push(document.getElementById("soma"));
    listenerBtn.push(document.getElementById("subtracao"));
    listenerBtn.push(document.getElementById("divisao"));
    listenerBtn.push(document.getElementById("multiplicacao"));

    //teclas númericas da calculadora
    listenerBtn.push(document.getElementById("num0"));
    listenerBtn.push(document.getElementById("num1"));
    listenerBtn.push(document.getElementById("num2"));
    listenerBtn.push(document.getElementById("num3"));
    listenerBtn.push(document.getElementById("num4"));
    listenerBtn.push(document.getElementById("num5"));
    listenerBtn.push(document.getElementById("num6"));
    listenerBtn.push(document.getElementById("num7"));
    listenerBtn.push(document.getElementById("num8"));
    listenerBtn.push(document.getElementById("num9"));

    //Adicionando evento de click
    for (var i = 0; i < listenerBtn.length; i++) {
        listenerBtn[i].addEventListener("click", passarValorTela);
    }

    btnResultado.onclick = function () {
        verificarResulatado();
    }

    function verificarResulatado() {
        try {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            if (verificarOperador(aux)) {
                apagarAnterior();
            }

            var valorCalculado = eval(tela.value); //calcular o conteúdo da string
            if (valorCalculado || valorCalculado == "0") {
                tela.value = valorCalculado;
            } else {
                throw "erro";
            }
        } catch (e) {
            console.error(e);
        }
    }

    function passarValorTela() {

        if (verificarOperador(this.value)) {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            //subtituir o valor do operador pelo atual
            if (verificarOperador(aux)) {
                apagarAnterior();
            }
        }
        if (this.value) {
            tela.value += this.value;
        }

    }

    btnApagarAnterior.onclick = function () {
        apagarAnterior();
    }

    function apagarAnterior() {
        if (tela.value.length > 0) {
            var aux = tela.value.substring(0, tela.value.length - 1);
            tela.value = aux;
        }
    }

    btnLimparTela.onclick = function () {
        tela.value = "";
    }

    function verificarOperador(valor) {
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;

            default:
                return false;
        }
    }
    btnConvertir.onclick = function () {
        convertirTemperatura();
    }

    function convertirTemperatura(){
        // Obtener el valor en grados Celsius
        var grados= parseFloat(document.getElementById("tela").value);


        // Convertir a Fahrenheit
        var fahrenheit = (grados * 9/5) + 32;

        // Mostrar el resultado en el campo de texto
        document.getElementById("tela").value = fahrenheit.toFixed(2);
    }

    btnRaiz.onclick = function () {
        sqrtFunction();
    }
    function sqrtFunction() {
        const raiz = document.getElementById('tela').value;
        const resulraiz = Math.sqrt(parseFloat(raiz));
        document.getElementById('tela').value = resulraiz;
    }

    btnCuadrado.onclick = function () {
        cuadradoFunction();
    }

    function cuadradoFunction() {
        const cuadrado = document.getElementById('tela').value;
        const resulcua = Math.pow(parseFloat(cuadrado), 2);
        document.getElementById('tela').value = resulcua;
    }

    btnLog.onclick = function () {
        logFunction();
    }
    function logFunction() {
        const log = document.getElementById('tela').value;
        const resullog = Math.log10(parseFloat(log));
        document.getElementById('tela').value = resullog;
    }

    btnSeno.onclick = function () {
        sinFunction();
    }
    function sinFunction() {
        const seno = document.getElementById('tela').value;
        const resulseno = Math.sin(parseFloat(seno)* (Math.PI / 180));
        document.getElementById('tela').value = resulseno;
    }

    btnCoseno.onclick = function () {
        cosFunction();
    }
    function cosFunction() {
        const coseno = document.getElementById('tela').value;
        const resulcoseno = Math.cos(parseFloat(coseno)* (Math.PI / 180));
        document.getElementById('tela').value = resulcoseno;
    }

    btnTangente.onclick = function () {
        tanFunction();
    }
    function tanFunction() {
        const tangente = document.getElementById('tela').value;
        const resultan = Math.tan(parseFloat(tangente)* (Math.PI / 180));
        document.getElementById('tela').value = resultan;
    }

    btnLn.onclick = function () {
        lnFunction();
    }

    function lnFunction() {
        const ln = document.getElementById('tela').value;
        const resulLN = Math.log(parseFloat(ln));
        document.getElementById('tela').value = resulLN;
    }



    
});
