//Criei essa função com array para quando ela ser clicada lá na pagina inicial

function Clique(num) {
    var url = new Array();
    url[0] = "http://127.0.0.1:5500/CalculadoraTinta.html";
    window.location = url[num];

}

function Salvar() {
    if (validar()) {



        //declarei as variavéis e já inicializei elas com os input e fazendo o calculos de largura * altura          
        parede1 = (document.getElementById("Altura").value) * (document.getElementById("Largura").value);
        parede2 = (document.getElementById("Altura2").value) * (document.getElementById("Largura2").value);
        parede3 = (document.getElementById("Altura3").value) * (document.getElementById("Largura3").value);
        parede4 = (document.getElementById("Altura4").value) * (document.getElementById("Largura4").value);

        // declarei elas com valor fixo já
        areaPorta = (0.80 * 1.9) * (document.getElementById("porta").value);//area da porta é fixa  

        areaJanela = (2.00 * 1.20) * (document.getElementById("janela").value);// area da janela é fixa

        var areaPortaJanela = ((areaPorta + areaJanela).toFixed(2));
        var totalParede = ((parede1 + parede2 + parede3 + parede4).toFixed(2));
        var areaPintar = ((totalParede - areaPortaJanela).toFixed(2));
        var quantidadeTinta = ((areaPintar / 5).toFixed(2));
        var res = window.document.getElementById('res');



        res.innerHTML = `Sua area total das paredes é: ${totalParede} m<sup>2</sup> <br>
                        Sua área das janelas e portas é: ${areaPortaJanela} <br>
                        Sua area a ser pintada é: ${areaPintar} <br>
                        E você irá precisar de:${quantidadeTinta} litros<br>`
        totalTinta(quantidadeTinta);
    }

}


// função para calcular quantas latas de tintas eu preciso com base na litragem acima
function totalTinta(quantidadeTinta) {


    lataG = 0;
    lataM = 0;
    lataP = 0;
    lataPP = 0;

    while (quantidadeTinta != 0) {
        if (quantidadeTinta > 18) {
            lataG++
            quantidadeTinta = quantidadeTinta - 18

        } else if (quantidadeTinta > 3.6) {
            lataM++
            quantidadeTinta = quantidadeTinta - 3.6

        } else if (quantidadeTinta > 2.5) {
            lataP++
            quantidadeTinta = quantidadeTinta - 2.5

        } else if (quantidadeTinta > 0.5) {
            lataPP++
            quantidadeTinta = quantidadeTinta - 0.5
        } else if (quantidadeTinta > 0) {
            lataPP++
            quantidadeTinta = 0

        }

    }
    res.innerHTML += `Tinta 18 litros: ${lataG} <br>
                        Tinta 3.6 litros: ${lataM}<br>
                        Tinta 2.5 litros: ${lataP}<br>
                        Tinta 0.5 litros: ${lataPP}<br>
                        `

}


function validar() {

    let alt = metragem.altura.value;
    let larg = metragem.largura.value;
    let alt2 = metragem.altura2.value;
    let larg2 = metragem.largura2.value;
    let alt3 = metragem.altura3.value;
    let larg3 = metragem.largura3.value;
    let alt4 = metragem.altura4.value;
    let larg4 = metragem.largura4.value;

    if (alt < 1 || alt > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos. ");
        metragem.alt.focus();
        return false;
    }

    if (larg < 1 || larg > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos.");
        metragem.larg.focus();
        return false;
    }

    if (alt2 < 1 || alt2 > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos. ");
        metragem.alt.focus();
        return false;
    }

    if (larg2 < 1 || larg2 > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos.");
        metragem.larg.focus();
        return false;
    }

    if (alt3 < 1 || alt3 > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos. ");
        metragem.alt.focus();
        return false;
    }

    if (larg3 < 1 || larg3 > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos.");
        metragem.larg.focus();
        return false;
    }

    if (alt4 < 1 || alt4 > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos. ");
        metragem.alt.focus();
        return false;
    }

    if (larg4 < 1 || larg4 > 50) {
        alert("A área da parede deve ser maior ou igual a 1 m² e menor ou igual a 50 m². Por favor, insira valores válidos.");
        metragem.larg.focus();
        return false;
    }

    return true;
}

function validaForm(){
    let nome  = form.nome.value;
    let email = form.email.value;

    if(nome =="" || nome.length <=3){
		alert("Informe o nome completo!");
		form.nome.focus();
		return false;
	}

    if(email == "" || email.length < 10){
		alert("E-mail não atende os requisitos!");
		form.email.focus();
		return false;
	}

    return true;
}