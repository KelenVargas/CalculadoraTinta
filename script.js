function novaPagina(num) {
    var url=new Array();
    url[0]="http://127.0.0.1:5500/Resultado.html";
    url[1]="http://127.0.0.1:5500/Formulario.html";
    window.location=url[num];
    }

   

    
    var areaPorta= 0.80*1.9;//area da porta é fixa
    var areaJanela= 2.00*1.20;// area da janela é fixa
    var areaPortaJanela = (qtdePorta*areaPorta)+(qtdeJanela*areaJanela);
    var areaPintar = areaParede - areaPortaJanela;
    var quantidadeTinta = areaParede/5;

    function Salvar(num){
        var parede = new Array();
        parede[1]= (document.getElementById("Altura").value) * (document.getElementById("Largura").value);
        parede[2]= (document.getElementById("Altura2").value) * (document.getElementById("Largura2").value);
        parede[3]= (document.getElementById("Altura3").value) * (document.getElementById("Largura3").value);
        parede[4]= (document.getElementById("Altura4").value) * (document.getElementById("Largura4").value);
    
        console.log("Area parede 1: " + parede[1]);
        console.log("Area parede 2 " + parede[2]);
        console.log("Area parede 3 " + parede[3]);
        console.log("Area parede 4 " + parede[4]);


    }

  
   /*
      function totalTinta(){
            var quantidadeTinta = areaParede/5;
            var latasTinta = [0.5, 2.5, 3.6, 18];  
    
                while(quantidadeTinta>0)
    
        }*/