var var_texto = document.getElementById("id_texto_lineas");
var var_boton = document.getElementById("id_boton");

var var_color = document.getElementById("id_color");
var var_xi = document.getElementById("id_xi");
var var_yf = document.getElementById("id_yf");


console.log(var_color);
function dibujoPorClick()
{
  var lineas = parseInt(var_texto.value);
  var el_color = var_color.value;

  var xi = parseInt(var_xi.value);
  var yf = parseInt(var_yf.value);
  curvasDeNivel_2(xi,0,500,yf,lineas, "d2", el_color,0)
  curvasDeNivel_2(xi,0,500,yf,lineas, "d2", el_color,1)
  // curvasDeNivel_2(0,0,500,500,lineas, "d2", el_color,2)
  // curvasDeNivel_2(0,0,500,500,lineas, "d2", el_color,3)

}

function dibujarLinea(nombre,color, x_i ,y_i ,x_f ,y_f)
{
  var d = document.getElementById(nombre);
  var lienzo = d.getContext("2d");
  // var ancho = d.width

  lienzo.beginPath();
  lienzo.strokeStyle = color;
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

function curvasDeNivel_2(xi, yi, xf, yf,lineas,nombreDibujo,color, i)
{
  paso = yf/lineas
  n = yf
  for(l = 0 ; l<yf ; l += paso)
  {
    if (i == 0)
    {
      yi  =  l  ;
      xf =  l+1 ;
    }else

      if(i == 1)
      {
        xi = yf ;
        yi  =  l  ;
        xf = yf-(l+1);
      }else

        if(i == 2)
          {
            yi = xi;
            xi = n - l;
            xf = yi;
            yf = n - (l+1) ;
          }else

            if(i == 3)
              {
                a = xi;
                xi = l;
                yi = a;
                b = yf;
                xf = yf;
                yf = b;
              }else
              {
              alert("Es del 0 al 3 pendejo!");
              }

    dibujarLinea(nombreDibujo, color , xi,yi, xf ,yf);
  }

}


function lineasLienzo1() {
  for(var i = 0;  i<250 ; i+=1){
    xf  = 250 - 4*i;
    yi  = 250 - 4*i;

    dibujarLinea("d1", var_color.value, var_xi.value,yi, xf, var_yf.value);
  }
}

var_boton.addEventListener("click" , dibujoPorClick);
var_boton.addEventListener("click" , lineasLienzo1);

// creamos unos marcos para los dibujos
marco("d1", 300, 300)
marco("d2", 500, 500)
