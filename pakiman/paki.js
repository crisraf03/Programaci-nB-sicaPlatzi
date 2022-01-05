
var imagenes = [];
imagenes["cauchin"] = "vaca.png" ;
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png" ;


var coleccion = [];

coleccion.push(new Pakiman("cauchin", 100 ,30));
coleccion.push(new Pakiman("pokacho", 80 ,50));
coleccion.push(new Pakiman("tocinauro", 120 ,40));

for (var p of coleccion)
{
  console.log(p);
  p.mostrar();
}

for(var i in coleccion[0])
{
  console.log(i);
}
