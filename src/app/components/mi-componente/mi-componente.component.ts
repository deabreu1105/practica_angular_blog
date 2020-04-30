import {Component} from '@angular/core';

//Creamos el decorador para indicarle las caracteristicas y propiedades del componente
@Component({
    selector:'mi-componente', //definimos el selector donde se cargara el componente
    templateUrl: './mi-componente.component.html'
})

//Creamos la clase del componente
export class MiComponente{

    public titulo :string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas:boolean;

    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es el primer componente";
        this.year = 2020;
        this.mostrarPeliculas = true;
        console.log('Componente mi-componente cargado');
        console.log(this.titulo,this.comentario,this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}