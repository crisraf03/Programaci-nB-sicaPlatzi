var vp = document.getElementById("villaplatzi");
var campo = vp.getContext("2d");
var dimImagenFondo = 500;
var cantidades = 2;

var xmov = 0;
var ymov = 0;
var x1;
var y1;


// marco("villaplatzi",dimImagenFondo,dimImagenFondo);
document.addEventListener("keyup", dibujoCompleto);


// dibujar imagenes
function dibujoCompleto()
{
  var cargaFondo = { value : "false"};
  ponerimagenFondo();
  if (cargaFondo.value == "true")
  {ponerImagenes();
  }

  function ponerimagenFondo()
  {
    ponerimagen(campo, "campo.png", dimImagenFondo, dimImagenFondo,"false",xmov,ymov);
    cargaFondo.value = "true";
   }
  function ponerImagenes()
  {
    for (var i = 0 ; i < cantidades; i++ )
    {
      ponerimagen(campo, "vaca.png", 78 , 48,"false");
      ponerimagen(campo, "pollo.png", 35 , 26,"false");
    }
    ponerimagen(campo, "cerdo.png", 55 , 33,"false");
  }
}



function ponerimagen(campo, nombreDibujo, dimX ,dimY, aleatoriedad)
{
  var n = dimImagenFondo;
  var imagen = new Image();
  imagen.src = nombreDibujo;
  imagen.addEventListener("load", dibujar);

  if(nombreDibujo == "cerdo.png")
  {
    var x0 = 20;
    var y0 = 20;
    x1 = x0 + xmov;
    y1 = y0 + ymov;
    campo.drawImage(imagen, x1, y1);
  }

  if (nombreDibujo != "cerdo.png")
  {
    dibujar(campo, imagen, n , dimX, dimY , aleatoriedad);

  }
}


function dibujar(campo, imagen, n , dimX, dimY , aleatoriedad)
{
  if (aleatoriedad == "false")
  {
    posicionesValidas(n-dimX, n-dimY);
    campo.drawImage(imagen, x, y);
  }
  if (aleatoriedad == "true")
  {
    posicionesValidasAleatorias(dimX, dimY);
    campo.drawImage(imagen, x, y);
   }
}




// valores aleatorios
function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor( Math.random()* (max - min + 1) ) + min;
    return resultado;
}

function valores_ran(min,max, cantidad)
{
    for(var i =0 ; i<cantidad ; i++)
    {
      var z;
      z = aleatorio(10,20);
      document.write(z+ " ,");
    }
}

function posicionesValidas(limX,limY)
{
    x = aleatorio(0,limX);
    y = aleatorio(0,limY);
    return x,y;
  }

function posicionesValidasAleatorias(dimX, dimY)
{
  var limX = Math.ciel(dimImagenFondo/dimX);
  var limY = Math.ciel(dimImagenFondo/dimY);
  x = aleatorio(0,limX);
  y = aleatorio(0,limY);
  x = x *dimX;
  y = y * dimY;
  return x, y ;
}








// funciones de comando movimiento

document.addEventListener("keydown", movimiento);

var teclas =
{
  LEFT : 37,
  UP : 38,
  RIGHT : 39,
  DOWN : 40,
};

function movimiento(evento)
{
  var evento = evento ;
  var x ;
  var y ;

  switch (evento.keyCode)
    {
      case teclas.UP:
      y = -10;
      x  = 0;
        break;
      case teclas.DOWN:
      y = + 10;
      x = 0;
        break;
      case teclas.LEFT:
      x = - 10;
      y = 0;
        break;
      case teclas.RIGHT:
      x = + 10;
      y = 0;
        break;
      default:
      console.log("otra tecla");
      x  = 0;
      y =  0;

      }
  xmov += x;
  ymov += y;
  return xmov, ymov;
}








// el marco
function dibujarLinea(nombre,color, x_i ,y_i ,x_f ,y_f)
{
  var d = document.getElementById(nombre);
  var lienzo = d.getContext("2d");
  // var ancho = d.width

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_i,y_i);
  lienzo.lineTo(x_f,y_f);
  lienzo.stroke();
  lienzo.closePath();
}
function marco(nombreDibujo,dim_x, dim_y)
{
  dibujarLinea(nombreDibujo, "black",1,1 ,1,dim_y)
  dibujarLinea(nombreDibujo, "black",1 ,1 ,dim_x, 1)
  dibujarLinea(nombreDibujo, "black",1 ,dim_y , dim_x, dim_y)
  dibujarLinea(nombreDibujo, "black",dim_x,1 ,dim_x, dim_y)
}
