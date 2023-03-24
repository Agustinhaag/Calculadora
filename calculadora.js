 let display= document.getElementById("display");       
 let botones= document.getElementsByClassName("boton"); 
 let array= Array.from(botones);                       
 array.forEach((boton)=>{                    
    boton.addEventListener("click",()=>{    
        calculadora(boton,display);          
    })                
 })                   
function calculadora(boton,display){  
    switch(boton.innerHTML){     
       case "C":                    
           borrar(display);        
           break;            
       case "=" :      
          calcular(display);   
          break;       
        default:       
           actualizar(display,boton);      
           break;     
    }              
}
function actualizar(display,boton){
  if(display.innerHTML==0){
    display.innerHTML="";
  }
  display.innerHTML= display.innerHTML+ boton.innerHTML;
}
function calcular(display){
    display.innerHTML= eval(display.innerHTML)
}
function borrar(display){
    display.innerHTML=0;
}