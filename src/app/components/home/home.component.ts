import { Component, OnInit } from '@angular/core';
//Importo el servicio para traer el articulo de la BD
import { ArticleService } from '../../services/article.service';
//Importo el models
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]             //anexo el servicio a prividers
})
export class HomeComponent implements OnInit {

  public title:String;
  public articles:Article[];     //declaro el atributo del modelo Articles como array

  constructor(
    private _articleService:ArticleService // Cargo el servicio  ArticleService
  ) { 
    this.title="Ultimos articulos";
  }

  ngOnInit() {
    //Eñ susbscribe se necesita para manejar el servisio http
    //el true es el parametro para que salga los 5 ultimos articles
    this._articleService.getArticles(true).subscribe(
      response =>{
        //console.log(response);
        if(response.articles){
          this.articles = response.articles;
          console.log(this.articles);
        }else{

        }
      },
      error => {
        console.log(error);
      }
    );

  }

}
