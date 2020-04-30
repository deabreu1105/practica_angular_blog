
//Para poder utilizar la clase afuera utilizo export para exportarla
export class Pelicula{
    //public: se tanto dentro como fuera de la clase
    //protected : dentro de la clase y las clases que la hereden
    //private: se utilizan solo dentro de la clase

    /*public title: string;
    public year: number;
    public image: string;*/

    //El constructor se encarga de iniciializar las variables con los
    //parametros que le pase desde la instancia
    /*constructor(title,year,image){
        this.title = title;
        this.year = year;
        this.image = image;
    }*/

    /*Puedo crear los atributos directamente desde el constructor
    para ahorrar tiempo y funciona de la misma manera*/
    constructor(
        public year: number,
        public title: string,
        public image: string
    ){}


    /**Blog deberia tener los modelos: usuario, articulos,comentarios,categorias y cada 
      objeto se define en angular como modelo un modelo es una clase
      que su funcion es una fabrica objetos
      */
}