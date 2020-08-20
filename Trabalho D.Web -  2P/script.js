function cv() {
    var op1 = document.getElementById('opt');
    var op2 = document.getElementById('opt2');
    var numero = document.getElementById('de');

    var opcao1 = (op1.value);
    var opcao2 = (op2.value);
    var n1 = Number(numero.value);

    var conta;

    var resposta = document.getElementById('salve');


    // DOLAR AMERICANO

    if (opcao1 == "Dolár Americano" && opcao2 == "Real") {
        conta = n1 * 5.36;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " reais.";

    } else if (opcao1 == "Dolár Americano" && opcao2 == "Libras Esterlinas") {
        conta = n1 * 0.77;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " libras esterlinas.";

    } else if (opcao1 == "Dolár Americano" && opcao2 == "Peso Argentino") {
        conta = n1 * 59.95;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " pesos argentinos.";

    } else if (opcao1 == "Dolár Americano" && opcao2 == "BitCoin") {
        conta = n1 * 0.00014;
        resposta.innerHTML = "Resultado: " + conta.toFixed(5) + " bitcoins.";

    } else if (opcao1 == "Dolár Americano" && opcao2 == "Euro") {
        conta = n1 * 0.90
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " Euros.";


        //LIBRAS ESTERLINAS

    } else if (opcao1 == "Libras Esterlinas" && opcao2 == "Real") {
        conta = n1 * 5.47;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " reais.";

    } else if (opcao1 == "Libras Esterlinas" && opcao2 == "Dolár Americano") {
        conta = n1 * 1.29;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " dólares.";

    } else if (opcao1 == "Libras Esterlinas" && opcao2 == "Peso Argentino") {
        conta = n1 * 77.53;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " pesos argentinos.";

    } else if (opcao1 == "Libras Esterlinas" && opcao2 == "BitCoin") {
        conta = n1 * 0.00018;
        resposta.innerHTML = "Resultado: " + conta.toFixed(5) + " bitcoins.";

    } else if (opcao1 == "Libras Esterlinas" && opcao2 == "Euro") {
        conta = n1 * 1.19;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " Euros.";

        //PESO ARGENTINO


    } else if (opcao1 == "Peso Argentino" && opcao2 == "Real") {
        conta = n1 * 0.071;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " reais.";

    } else if (opcao1 == "Peso Argentino" && opcao2 == "Dolár Americano") {
        conta = n1 * 0.017;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " dólares.";

    } else if (opcao1 == "Peso Argentino" && opcao2 == "Libras Esterlinas") {
        conta = n1 * 0.013;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " libras esterlinas.";

    } else if (opcao1 == "Peso Argentino" && opcao2 == "BitCoin") {
        conta = n1 * 0.0000023;
        resposta.innerHTML = "Resultado: " + conta.toFixed(7) + " bitcoins.";

    } else if (opcao1 == "Peso Argentino" && opcao2 == "Euro") {
        conta = n1 * 0.015;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " Euros.";

        //REAL 


    } else if (opcao1 == "Real" && opcao2 == "Peso Argentino") {
        conta = n1 * 14.19;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " pesos argentinos.";

    } else if (opcao1 == "Real" && opcao2 == "Dolár Americano") {
        conta = n1 * 0.24;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " dólares.";

    } else if (opcao1 == "Real" && opcao2 == "Libras Esterlinas") {
        conta = n1 * 0.18;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " libras esterlinas.";

    } else if (opcao1 == "Real" && opcao2 == "BitCoin") {
        conta = n1 * 0.000032;
        resposta.innerHTML = "Resultado: " + conta.toFixed(6) + " bitcoins.";

    } else if (opcao1 == "Real" && opcao2 == "Euro") {
        conta = n1 * 0.22
        resposta.innerHTML = "Resultado: " + conta.toFixed(6) + " Euros."

        //BITCOIN

    } else if (opcao1 == "BitCoin" && opcao2 == "Real") {
        conta = n1 * 30845.37;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " reais.";

    } else if (opcao1 == "BitCoin" && opcao2 == "Dolár Americano") {
        conta = n1 * 7304.86;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " dólares.";

    } else if (opcao1 == "BitCoin" && opcao2 == "Libras Esterlinas") {
        conta = n1 * 5650.27;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " libras esterlinas.";

    } else if (opcao1 == "BitCoin" && opcao2 == "Peso Argentino") {
        conta = n1 * 438109.71;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " pesos argentinos.";
    } else if (opcao1 == "BitCoin" && opcao2 == "Euro") {
        conta = n1 * 6660.84;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " Euros.";


        //EURO	


    } else if (opcao1 == "Euro" && opcao2 == "Real") {
        conta = n1 * 4.63;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " reais.";

    } else if (opcao1 == "Euro" && opcao2 == "Dolár Americano") {
        conta = n1 * 1.11;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " dólares.";

    } else if (opcao1 == "Euro" && opcao2 == "Libras Esterlinas") {
        conta = n1 * 0.84;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " libras esterlinas.";

    } else if (opcao1 == "Euro" && opcao2 == "Peso Argentino") {
        conta = n1 * 4.63;
        resposta.innerHTML = "Resultado: " + conta.toFixed(2) + " pesos argentinos";

    } else if (opcao1 == "Euro" && opcao2 == "BitCoin") {
        conta = n1 * 0.00015;
        resposta.innerHTML = "Resultado: " + conta.toFixed(6) + " BitCoins";

    } else {
        alert("Escolha moedas distintas para fazer o calculo!!!!");
    }



}
