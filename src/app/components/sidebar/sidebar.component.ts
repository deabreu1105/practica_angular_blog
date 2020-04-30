import { Component, OnInit } from '@angular/core';

//Para poder redirigir los valores de la busqueda tengo que importar los parametro del Router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString:string;

  //cargamos los tres servicios dentro del constructor
  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  goSearch(){
    //alert(this.searchString);
    this._router.navigate(['/buscar',this.searchString]);

  }

}









