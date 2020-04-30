import { Component, OnInit } from '@angular/core';

//Para recoger parametros por la URL tengo que importar lo siguiente
import {Router, ActivatedRoute ,Params} from '@angular/router';




@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public nombre:String;
  public apellidos:String;

  //para poder utilizar los servicios que importo tengo 
  //que inicializarlos en el constructor
  constructor(
    private _route:ActivatedRoute, //con ActivatedRoute se sacan los parametros de la URL
    private _router:Router  // Router podemos hacer redirecciones a otras paginas
  ) { }

  //ngOnInit primer metodo que se ejecuta despues del constructor
  ngOnInit() {
    //subscribe  --> es un metodo de tipo observable (va a estar la escucha)
    this._route.params.subscribe((params:Params) => {
      //console.log(params);
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
  }

  //Metodo parare direccionar
  redireccion(){
    //alert("metodo redireccion");
    //this._router.navigate(['/formulario']);

    //direccionar a la misma pagina llevandome parametros por URL
    this._router.navigate(['/pagina-de-pruebas','Daniel','Abreu']);

  }




}
