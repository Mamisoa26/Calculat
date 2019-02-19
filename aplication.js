
     
   function myFunction() {
     var   resultat=document.getElementById('resultat'),
           nb1 = document.getElementById('nb1'),
           nb2= document.getElementById('nb2');
       resultat.innerHTML =  parseInt(nb1.value )+ parseInt(nb2.value);
           }

           function myFunction1() {
           var resultat1 = document.getElementById('resultat1'),
             nb1 = document.getElementById('nb3'),
             nb2= document.getElementById('nb4');
             resultat1.innerHTML =  parseInt(nb1.value )* parseInt(nb2.value);
                 }
      
                 function myFunction2() {
                   resultat.innerHTML=  parseInt(nb1.value )/ parseInt(nb2.value);
                       }
             function reset(){
                   nb1.value =" ";
                   nb2.value =" ";
                   resultat.innerHTML =" ";"=" 
             }

             document.getElementById('in').value =" ";
           function one(){
             document.getElementById('in').value +=document.getElementById('one').value;
           }
           function two(){
             document.getElementById('in').value +=document.getElementById('two').value;
           }
           function plus(){
             document.getElementById('in').value +=document.getElementById('plus').value;
           }

           function egl(){
             var val = document.getElementById('in').value.split("+");
             document.getElementById('in').value="";
             var c= 0;
           for(var i= 0 ;i<val.length;i++){
             c+=parseInt(val[i]);
           }
           document.getElementById('in').value =  c;
            }
          
           function test(){
             var nombre = document.getElementById("nombre"),
                    resultat2 = document.getElementById("resultat2");
             if(!isNaN(parseInt(nombre.value))){
                   resultat2.innerHTML = "  - un nombre";
                   console.log("nombre")
                  var b = 0;
                  var i =2;
                 
                    while(i<parseInt(nombre.value)){
                           if(parseInt(nombre.value) %i== 0 ){
                                  resultat2.innerHTML += "<br>  - non premier";
                                   
                                   i=parseInt(nombre.value);
                                 b = 1;
                                    if(parseInt(nombre.value)%2 ==0){
                                     resultat2.innerHTML += "<br> - nombre paire";
                                    }
                                   else{
                                    resultat2.innerHTML += " <br> - nombre impaire";
                                   }
                              }
                              i++; 
                              }
                        if(b===0){
                              resultat2.innerHTML += " <br>  - nombre premier";  
                            console.log(nombre," premier"); 
                             if(parseInt(nombre.value) ==2){
                               resultat2.innerHTML += " <br>- nombre paire";
                             }
                             else{
                          resultat2.innerHTML += " <br> - nombre impaire";
                             }
                        }           
                  }

            else{
                   resultat2.innerHTML = " - pas un nombre"; 
                  console.log("pas un nombre") 
             }
            
           }
            
            