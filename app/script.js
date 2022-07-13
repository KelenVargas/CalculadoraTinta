//Criei essa função com array para quando ela ser clicada lá na pagina inicial

function Clique(num) {
    var url=new Array();
    url[0]="http://127.0.0.1:5500/CalculadoraTinta.html";
    window.location=url[num];

}       
       
    function Salvar(){  
        //declarei as variavéis e já inicializei elas com os input e fazendo o calculos de largura * altura          
        var parede1= (document.getElementById("Altura").value) * (document.getElementById("Largura").value);
        var parede2= (document.getElementById("Altura2").value) * (document.getElementById("Largura2").value);
        var parede3= (document.getElementById("Altura3").value) * (document.getElementById("Largura3").value);
        var parede4= (document.getElementById("Altura4").value) * (document.getElementById("Largura4").value);

        // declarei elas com valor fixo já
        var areaPorta=(0.80*1.9) * (document.getElementById("porta").value) ;//area da porta é fixa  
             
        var areaJanela=(2.00*1.20) * (document.getElementById("janela").value);// area da janela é fixa
        
        var areaPortaJanela = areaPorta + areaJanela 
        var totalParede = parede1 + parede2 + parede3 + parede4;
        var areaPintar = totalParede - areaPortaJanela;
        var quantidadeTinta = areaPintar/5;
        var res = window.document.getElementById('res')
        
        
       
        res.innerHTML = `Sua area total das paredes é: ${totalParede} m<sup>2</sup> <br>
                        Sua área das janelas e portas é: ${areaPortaJanela} <br>
                        Sua area a ser pintada é: ${areaPintar} <br>
                        E você irá precisar de:${quantidadeTinta} litros`
        totalTinta(quantidadeTinta)
                     
    }
                             
   
          // função para calcular quantas latas de tintas eu preciso com base na litragem acima
      function totalTinta(quantidadeTinta){         
                     
            var lataG  =  0;
            var lataM  =  0;
            var lataP  =  0;
            var lataPP  = 0;

             while  ( quantidadeTinta !=  0 ){
            if(quantidadeTinta>18){
                lataG++
                quantidadeTinta= quantidadeTinta-18
            } else if (quantidadeTinta>3.6) {
                lataM++
                quantidadeTinta= quantidadeTinta-3.6
            } else if (quantidadeTinta>2.5) {
                lataP++
                quantidadeTinta= quantidadeTinta-2.5
            } else if (quantidadeTinta>0.5) {
                lataPP++
                quantidadeTinta= quantidadeTinta-0.5
            } else if (quantidadeTinta>0) {
                lataPP++
                quantidadeTinta= 0
            } 
            
        }
        res.innerHTML += `Tinta 18 litros: ${lataG} <br>
                        Tinta 3.6 litros: ${lataM}<br>
                        Tinta 2.5 litros: ${lataP}<br>
                        Tinta 0.5 litros: ${lataPP}<br>
                        `            

        }

        function Validacao(){
            
            if(!altura || !largura){
                

            }
            
            
            else if (areaPortaJanela >= areaPintar/2){


            } else if (areaParede < 1 || areaParede > 50 ){

            }

        }