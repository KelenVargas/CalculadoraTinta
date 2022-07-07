function novaPagina(num) {
    var url=new Array();
    url[0]="http://127.0.0.1:5500/Resultado.html";
    url[1]="http://127.0.0.1:5500/Formulario.html";
    window.location=url[num];

}   

    
   // var areaPorta= 0.80*1.9;//area da porta é fixa
    //var areaJanela= 2.00*1.20;// area da janela é fixa
    //var areaPortaJanela = (qtdePorta*areaPorta)+(qtdeJanela*areaJanela);
   // var areaPintar = areaParede - areaPortaJanela;
    //var quantidadeTinta = areaParede/5;

    function Salvar(){
       
        var parede1= (document.getElementById("Altura").value) * (document.getElementById("Largura").value);
        var parede2= (document.getElementById("Altura2").value) * (document.getElementById("Largura2").value);
        var parede3= (document.getElementById("Altura3").value) * (document.getElementById("Largura3").value);
        var parede4= (document.getElementById("Altura4").value) * (document.getElementById("Largura4").value);
                 
        
        var areaPorta=(0.80*1.9);//area da porta é fixa  
        Porta1= (document.getElementById("porta1").value) * (areaPorta)
        Porta2= (document.getElementById("porta2").value) * (areaPorta)
        Porta3= (document.getElementById("porta3").value) * (areaPorta)
        Porta4= (document.getElementById("porta4").value) * (areaPorta)

        var areaJanela=(2.00*1.20);// area da janela é fixa
        janela1=(document.getElementById("janela1").value) * (areaJanela)
        janela2=(document.getElementById("janela2").value) * (areaJanela)
        janela3=(document.getElementById("janela3").value) * (areaJanela)
        janela4=(document.getElementById("janela4").value) * (areaJanela)


        var areaPortaJanela = areaPorta + areaJanela 
        var totalParede = parede1 + parede2 + parede3 + parede4;
        var areaPintar = totalParede - areaPortaJanela;
        var quantidadeTinta = areaPintar/5;
        var res = window.document.getElementById('res')

        
        console.log("Area parede 1: " + parede1);
        console.log("Area parede 2: " + parede2);
        console.log("Area parede 3: " + parede3);
        console.log("Area parede 4: " + parede4);

        console.log ("Area da porta e janela é : " + areaPortaJanela);
        console.log (" A area a ser pintada é: " + areaPintar)
       
        res.innerHTML= `Sua area total das paredes é: ${totalParede} m<sup>2</sup> <br>
                        Sua área das janelas e portas é: ${areaPortaJanela} <br>
                        Sua area a ser pintada é: ${areaPintar} <br>
                        E você irá precisar de:${quantidadeTinta} litros`
        
                     
    }

  
   /*
      function totalTinta(){
            var quantidadeTinta = areaParede/5;
            var latasTinta = [0.5, 2.5, 3.6, 18];  
    
                while(quantidadeTinta>0)
    
        }*/