var colorcito = document.getElementById("id_color");

var teclas =
{
  LEFT : 37,
  UP : 38,
  RIGHT : 39,
  DOWN : 40,
};

function dibujarLinea(nombre,color, x_i ,y_i ,x_f ,y_f)
  {
    var d = document.getElementById(nombre);
    var lienzo = d.getContext("2d");

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

function dibujarPunto(nombre, color, x,y)
  {
    dibujarLinea(nombre, color,x-1,y-1 ,x+1 ,y+1)
  }

function dibujarTeclado(evento)
  {
    console.log("el evento es este! " + evento);
    var nombreDibujo = "pantalla";
    var paso = 2;
    var colorFlecha = colorcito.value;
    switch (evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(nombreDibujo, colorFlecha ,x ,y ,x, y - paso);
        y =  y - paso;
        if (y > dim_y){ y = dim_y}
        break;
      case teclas.DOWN:
        dibujarLinea(nombreDibujo, colorFlecha ,x ,y , x , y + paso);
        y = y + paso;
        if (y <0){x = 0}
        break;
      case teclas.LEFT:
        dibujarLinea(nombreDibujo, colorFlecha ,x ,y ,x -paso,y);
        x = x - paso;
        if (x <0){x = 0}

        break;
      case teclas.RIGHT:
        dibujarLinea(nombreDibujo, colorFlecha ,x ,y ,x + paso ,y);
        x = x + paso;
        if (x > dim_x){x = dim_x}
        break;
      default:
        console.log("otra tecla")
      }
    }



var dim_x = 500;
var dim_y = 500;
marco("pantalla", dim_x,dim_y)

document.addEventListener("keydown", dibujarTeclado)

x = 250
y = 250

dibujarPunto("pantalla","red",dim_x/2, dim_y/2)
