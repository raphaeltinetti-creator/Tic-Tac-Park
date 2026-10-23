function calcular(){
    const v1 = window.document.getElementById('valor1').value;
    const v2 = window.document.getElementById('valor2').value;
    const v3 = window.document.getElementById('valor3').value;
    const v4 = window.document.getElementById('valor4').value;
    if (v1 == '' || v2 == '' || v3 == '' || v4 == '' ) {
        window.alert("Os campos estão vazios, preencha-os corretamente!");
        return;
    }

    const num1 = Number(v1);
    const num2 = Number(v2);
    const num3 = Number(v3);
    const num4 = Number(v4);
    const res = window.document.getElementById('res1');
    const res1 = window.document.getElementById('res2');

    const campo1 = window.document.getElementById('valor1');
    const campo2 = window.document.getElementById('valor2');
    const campo3 = window.document.getElementById('valor3');
    const campo4 = window.document.getElementById('valor4');

    let temErro = false;

    campo1.classList.remove("erro");
    if (num1 < 0 || num1 > 23) {
        campo1.classList.add("erro");
        temErro = true;
    }

    campo2.classList.remove("erro");
    if (num2 < 0 || num2 > 59) {
        campo2.classList.add("erro");
        temErro = true;
    }

    campo3.classList.remove("erro");
    if (num3 < 0 || num3 > 23) {
        campo3.classList.add("erro");
        temErro = true;
    }

    campo4.classList.remove("erro");
    if (num4 < 0 || num4 > 59) {
        campo4.classList.add("erro");
        temErro = true;
    }

    if (temErro) {
        res.innerHTML = "";
        res1.innerHTML = "";
        res1.classList.remove("gratis", "normal", "teto");
        window.alert("Há campos com valores inválidos. Hora: 0 a 23, minuto: 0 a 59.");
        return;
    }

    res.innerHTML = `Entrou às ${num1} horas e ${num2} minutos, e saiu às ${num3} horas e ${num4} minutos`;
    res1.classList.remove("gratis", "normal", "teto");

    let entrada = num1 * 60 + num2;
    let saida = num3 * 60 + num4;

    let permanencia = saida - entrada;
    if (permanencia < 0) {
        permanencia = permanencia + 1440;
    }

    let horas = Math.floor(permanencia / 60);
    let minutos = permanencia % 60;

    let valor = 0;
    let sobra = permanencia - 60;

    if (permanencia > 15) {
        valor = valor + 8;
        while (sobra > 0) {
            valor = valor + 4;
            sobra -= 60;
        }
    }

    let teto = false;
    if (valor > 40) {
        valor = 40;
        teto = true;
    }

    let valorTexto = valor.toFixed(2).replace(".", ",");

    if (valor == 0) {
        res1.classList.add("gratis");
    } else if (teto) {
        res1.classList.add("teto");
    } else {
        res1.classList.add("normal");
    }

    res1.innerHTML = `Tempo: ${horas}h ${minutos}min <br> Valor: R$ ${valorTexto}`;
}