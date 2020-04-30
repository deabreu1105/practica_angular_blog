import { Component, OnInit } from '@angular/core';
//importamos el servicio de article
import { ArticleService } from '../../services/article.service';

//Importamos el modelo article
import { Article } from '../../models/article';

//importo el url de la api que esta global  en este caso para poder anexar la imagen
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  //declaramos article como u array del modelo Article
  public articles: Article[];

  //atributo que se utilizara para traer la imagen
  public url:string;

  constructor(
    private _articleService:ArticleService
  ) { 

    //Se carga la url para poder utilizar la imagen
    this.url = Global.url;
  }

  ngOnInit() {
    //console.log(this._articleService.pruebas());
    //Eñ susbscribe se necesita para manejar el servisio http
    this._articleService.getArticles().subscribe(
      response =>{
        //console.log(response);
        if(response.articles){
          this.articles = response.articles;

        }else{

        }
      },
      error => {
        console.log(error);
      }
    );


  }

}





