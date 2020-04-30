import { Component, OnInit, Input } from '@angular/core';
//Importamos el models Articles
import { Article } from '../../models/article';

//Impotamos global tambien aqui para que funcionen las imagenes
import { Global } from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  //Declaramos un Input
  @Input() articles:Article[];
  public url:string;

  constructor() {
    //cargamos la ruta del api que esta en global
    this.url = Global.url;
  }

  ngOnInit() {
    console.log(this.articles);
  }

}
