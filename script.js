function medias() {

    const provas = prompt("Quantas provas você fez?");

    if (provas == 3) {

    const n1 = +prompt("Qual o valor da primeira nota?");
    const n2 = +prompt("Qual o valor da segunda nota?");
    const n3 = +prompt("Qual o valor da terceira nota?");

    let saida = (n1 + n2 + n3) / 3;

    alert(saida);
    }

    else if (provas == 4) {

    const n1 = +prompt("Qual o valor da primeira nota?");
    const n2 = +prompt("Qual o valor da segunda nota?");
    const n3 = +prompt("Qual o valor da terceira nota?");
    const n4 = +prompt("Qual o valor da quarta nota?");

    let saida = (n1 + n2 + n3 + n4) / 4

    alert(saida)

    }

    else if (provas == 5) {

    const n1 = +prompt("Qual o valor da primeira nota?");
    const n2 = +prompt("Qual o valor da segunda nota?");
    const n3 = +prompt("Qual o valor da terceira nota?");
    const n4 = +prompt("Qual o valor da quarta nota?");
    const n5 = +prompt("Qual o valor da quinta nota?");

    let saida = (n1 + n2 + n3 + n4 + n5) / 5

    alert(saida)

    }

    else {
        alert("Médias liberadas somente para quem fez de 3 a 5 provas")
    }
}

