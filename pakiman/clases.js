class Pakiman
 {
  constructor(nombre , vida, ataque)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida ;
    this.ataque = ataque ;
    this.imagen.src = imagenes[this.nombre];

  }
  hablar()
  {
  alert(this.nombre);
  }

  mostrar()
  {
    document.write("<hr />Nombre : " + this.nombre + "<br / >");
    document.body.appendChild(this.imagen);
    document.write(" <br /> Vida : " + this.vida);
    document.write(" <br /> Ataque : " + this.ataque + "<br />" );
  }

}
