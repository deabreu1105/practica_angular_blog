//Los Hooks: DoCheck,OnDestroy se coloco para usarlo
import { Component, OnInit ,DoCheck,OnDestroy} from '@angular/core';
//Importo el modelo(clase) pelicula
import { Pelicula } from '../../models/pelicula'; 

//Importo el servicio PeliculasService
import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]  //colocamos providers [PeliculaService] para utilizar el servicio
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {
  public titulo: String;
  //public peliculas: Array<any>; //Asi declaro un array any significa que mi array puede ser cualquier tipo de dato
  //Esta seria la instancia del modelo Pelicula
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha:any;

  
  //El constructor es solo para inicializar las propiedades de la clase
  constructor(
    private _peliculaService:PeliculaService      //Propiedad vinculada a un servicio
  ){
    //console.log("Constructor cargado");
    this.titulo = "Componente peliculas";
    //Aquui creo cada uno de los objetos
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8,12);
  }

  //ngOnInit es la funcion que se carga despues del constructor
  //Aqui iria toda la logica
  ngOnInit() {
    console.log("Componente cargado");
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());

  }

  //Se ejecuta cada vez que hay un nuevo cambio en el componente o en la aplicacion de angular
  ngDoCheck(){
    console.log("ngDoCheck lanzado");
  }

  //llamada del evento del boton
  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado!!";
  }

  //Se usa para avisar que se va a destruir el componente
  ngOnDestroy(){
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

  mostrarFavorita(event){
    //alert(event);
    this.favorita = event.pelicula;
  }

}













