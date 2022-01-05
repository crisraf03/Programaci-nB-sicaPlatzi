
class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

// agregamos la cantidad del billetes en el banco
var caja = [];
caja.push( new Billete(50, 30) );
caja.push( new Billete(20, 20) );
caja.push( new Billete(10, 10) );

function dineroEnCajero(caja)
{
  var dineroTotal = 0 ;
  for(var j of caja)
  {
    var valor = j.valor ;
    var cantidad = j.cantidad ;
    dineroTotal = dineroTotal + valor*cantidad
    console.log(dineroTotal);
  }
  console.log("El dinero en caja es: " , dineroTotal);
}


// agregamos variables para los elements html
var b = document.getElementById("boton");
var resultado = document.getElementById("resultado");

var entregado = [];
var papeles = 0;

function entregarDinero()
{
  var  t = document.getElementById("aExtraer");
  dinero = parseInt(t.value);

  for(var bi of caja)
  {
    console.log(bi);
    var billete = bi.valor;
    var cantidad = bi.cantidad;

    if(dinero > 0)
    {
      var cociente = Math.floor(dinero/billete);

      if (cociente > cantidad) {papeles = cantidad;}
      else {papeles = cociente;}

      entregado.push( new Billete(billete,papeles) );
      dinero = dinero - (billete * papeles);
      cantidad = cantidad - cociente;
      console.log("b,c :" , billete , cantidad);
    }
  }
  console.log("entregado", entregado);
  entregado2 = entregado;
  document.write(entregado2);
  entregado = [] ;
  
}


document.write("aqui esta tu dinero: ") ;
document.addEventListener("click" , entregarDinero)
