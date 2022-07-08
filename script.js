function novaPagina(num) {
    var url=new Array();
    url[0]="http://127.0.0.1:5500/Resultado.html";
    url[1]="http://127.0.0.1:5500/Formulario.html";
    window.location=url[num];

}       
       
    function Salvar(){            
        var parede1= (document.getElementById("Altura").value) * (document.getElementById("Largura").value);
        var parede2= (document.getElementById("Altura2").value) * (document.getElementById("Largura2").value);
        var parede3= (document.getElementById("Altura3").value) * (document.getElementById("Largura3").value);
        var parede4= (document.getElementById("Altura4").value) * (document.getElementById("Largura4").value);

        
        var areaPorta=(0.80*1.9) * (document.getElementById("porta").value) ;//area da porta é fixa  
             
        var areaJanela=(2.00*1.20) * (document.getElementById("janela").value);// area da janela é fixa
        
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

  
   
      function totalTinta(){
            var totalParede = parede1 + parede2 + parede3 + parede4;
            var areaPintar = totalParede - areaPortaJanela;
            var quantidadeTinta = areaPintar/5;
            var areaPortaJanela = areaPorta + areaJanela 
          
                     
             lataG  =  0 ;
             lataM  =  0 ;
             lataP  =  0;
             lataPP  = 0;
             while  ( quantidadeTinta !=  0 ){
            if(quantidadeTinta>18){
                lataG++
                quantidadeTinta= quantidadeTinta--
            } else if (quantidadeTinta>3.6) {
                lataM++
                quantidadeTinta= quantidadeTinta--
            } else if (quantidadeTinta>2.5) {
                lataP++
                quantidadeTinta= quantidadeTinta--
            } else if (quantidadeTinta>0.5) {
                lataPP++
                quantidadeTinta= quantidadeTinta--
            } else if (quantidadeTinta>0) {
                latasPP++
                quantidadeTinta= 0
            } 
            
        }
            
           

        }

        function Validacao(){

            if(!altura || !largura){
                

            }else if (areaPortaJanela >= areaPintar/2){


            } else if (areaParede < 1 || areaParede > 50 ){

            }

        }