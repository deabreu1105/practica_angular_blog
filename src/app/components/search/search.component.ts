import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})

export class SearchComponent implements OnInit {

  public articles:Article[];
  public search:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    //recojemos el parametro de search de la vista search.component.html
    this._route.params.subscribe(params => {
      var search = params['search'];
      //alert(search);
      this.search = search;

      //Enviamos al Apires el parametro
      this._articleService.search(search).subscribe(

        response => {
            //console.log(response);
            if(response.articles){
              this.articles = response.articles;
              //console.log(this.articles);
            }else{
               this.articles = [];
            }
            
        },
        error => {
          console.log(error);
          //Si no devuelve nada ir a inicio
          this.articles = [];
          //this._router.navigate(['/home']);
        }



      );


    })
  }

}









