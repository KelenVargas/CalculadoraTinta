//Criei essa função com array para quando ela ser clicada lá na pagina inicial

function Clique(num) {
    var url=new Array();
    url[0]="http://127.0.0.1:5500/CalculadoraTinta.html";
    window.location=url[num];

}       
       
    function Salvar(){  
        //declarei as variavéis e já inicializei elas com os input e fazendo o calculos de largura * altura          
         parede1= (document.getElementById("Altura").value) * (document.getElementById("Largura").value);
         parede2= (document.getElementById("Altura2").value) * (document.getElementById("Largura2").value);
         parede3= (document.getElementById("Altura3").value) * (document.getElementById("Largura3").value);
         parede4= (document.getElementById("Altura4").value) * (document.getElementById("Largura4").value);

        // declarei elas com valor fixo já
         areaPorta=(0.80*1.9) * (document.getElementById("porta").value);//area da porta é fixa  
             
        areaJanela=(2.00*1.20) * (document.getElementById("janela").value);// area da janela é fixa
        
        var areaPortaJanela = areaPorta + areaJanela;
        var totalParede = parede1 + parede2 + parede3 + parede4;
        var areaPintar = totalParede - areaPortaJanela;
        var quantidadeTinta = areaPintar/5;      
        var res = window.document.getElementById('res');
        
        
       
        res.innerHTML= `Sua area total das paredes é: ${totalParede} m<sup>2</sup> <br>
                        Sua área das janelas e portas é: ${areaPortaJanela} <br>
                        Sua area a ser pintada é: ${areaPintar} <br>
                        E você irá precisar de:${quantidadeTinta} litros<br>`
                     
        
                     
    }
                             
   
          // função para calcular quantas latas de tintas eu preciso com base na litragem acima
      function totalTinta(){

            var totalParede = parede1 + parede2 + parede3 + parede4;
            var areaPintar = totalParede - areaPortaJanela;
            var quantidadeTinta = areaPintar/5;
            var areaPortaJanela = areaPorta + areaJanela;  
            var res2 = window.document.getElementById('res2');        
                     
             lataG  = 0 ;
             lataM  = 0 ;
             lataP  = 0;
             lataPP = 0;

             while  ( quantidadeTinta !=  0 ){
            if(quantidadeTinta>18){
                quantidadeTinta= quantidadeTinta-18
                lataG++
            } else if (quantidadeTinta>3.6) {
                quantidadeTinta= quantidadeTinta-3.6
                lataM++
            } else if (quantidadeTinta>2.5) {
                quantidadeTinta= quantidadeTinta-2.5
                lataP++
            } else if (quantidadeTinta>0.5) {
                lataPP++
                quantidadeTinta= quantidadeTinta-0.5
            } else if (quantidadeTinta>0) {
               quantidadeTinta= 0
               latasPP++
            } 
            
        }
        res2.innerHTML= `Tinta 18 litros: ${lataG} <br>
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