export class Personas {
  //GENERAR LOS ATRIBUTOS
  public nombre: string;
  public edad: number;
  public direccion: string; //La direcion no siempre debe aparecer cuqndo se instacia el objeto por eso de pone el signo de interrogacion
  //public funcion: any;

  constructor(nombre: string, edad: number, direccion: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;

    //this.funcion = funcionPrueba();
  }
}

// public  verPersona() : void
// {

// }
