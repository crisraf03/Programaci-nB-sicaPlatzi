var masa = parseFloat(prompt("¿Cuál es tu masa en kg?"));
//var planeta2  = document.getElementById("planeta");
//var planeta3  = document.getElementById("planetas");
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupyter = 24.8;

// var var_boton = document.getElementById("id_boton");
// var_boton.addEventListener("click" , hola);

document.write("Para una masa de " + masa + " Kg <br\>") ;

escribir("tierra" , masa, g_tierra);
escribir("marte" , masa, g_marte);
escribir("jupyter" , masa, g_jupyter);



function hola() {
  document.write("holis");
}

function escribir(nombrePlaneta, masa, g)
{
  var peso = masa*g ;
  document.write(" <p> tu peso en " + nombrePlaneta +" es:  <strong>" + parseInt(peso) + "N </strong> <\p>" ) ;
}

//aprender a hacer un switch
function SelectorPlaneta(planeta){

if(planeta == 1)
  {
    g = g_tierra
    nombrePlaneta = "tierra"
  }

  if(planeta == 2)
  {
    g = g_marte
    nombrePlaneta = "marte"
  }

if(planeta == 3)
  {
    g = g_jupyter
    nombrePlaneta = "jupyter"
  }
}
