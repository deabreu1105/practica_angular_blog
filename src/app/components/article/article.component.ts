import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

//Importamos el sweetalert para mejorar las alertas
/**para arreglar el otro error de switalert tenemos que ir al node_modules
 * a la carpeta de sweetalert/typings/sweetalert.d.ts y comentar
 *   //const swal: SweetAlert;
 */
import swal from 'sweetalert';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article:Article; 
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
  }


  /*ngOnInit() {
    //subscribe  --> es un metodo de tipo observable (va a estar la escucha)
    this._route.params.subscribe((params:Params) => {
      //console.log(params);
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
  }*/

  ngOnInit() {
    //recojemos el parametro de search de la vista article.component.html
    this._route.params.subscribe(params => {
      let id = params['id'];

      //Enviamos al Apires el parametro
      this._articleService.getArticle(id).subscribe(
        response =>{
          console.log(response);
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          //console.log("Hola");
          console.log(error);
        }
      );
    });
  }
  //Metodo para Borrar el articulo
  delete(id){

    swal({
      title: "¿Estas seguro?",
      text: "Una vez borrado el articulo ya no prodras recuperarlo!",
      icon: "warning",
      buttons: [true,true], /// [true,true] para arreglar el error
      dangerMode: true
    })
    .then((willDelete) => {
      //Se ejecuta la petición ajax
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response => {
            //Aparece el alerta de success
            swal("El articulo ha sido borrado!!", {
              icon: "success",
            });
            //redirecciono a /blog
            this._router.navigate(['/blog']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );

        
      } else {
        swal("Tranquilo nada se ha borrado!!");
      }
    });
 


    
  }

}


















