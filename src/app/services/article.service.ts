/**
 * Los servicios son una serie de clases que colecciona metodos y sirven para abstraer logica y para 
 * separar  las funcionalidades que estamos haciendo en nuestros componentes
 * es decir si cyo tengo un componente articulo debo tener un servicio articulo
 * Pra que este se encargue de hacer las peticiones ajax y demas (llamada http al servidor)
 * para que esos cambios se produscan en el backend
 */
import { Injectable } from '@angular/core';
//HttpClient: para hacer peticiones ajax al backend
//HttpHeaders: manipular mucho mas las peticiones ajax y mandar mas datos
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Observable sirve para recojer los datos que nos manda el api
import { Observable } from 'rxjs';
//importo el modelo article
import { Article } from '../models/article';
//importo el url de la api que esta global
import { Global } from './global';

@Injectable()
export class ArticleService{
    public url:string;

    constructor(
        //cargo el HttpClient para poder hacer peticiones ajax
        //para poder utilizar el HttpClientModule hay que configurarlo en el app.module porque si no no va a funcionar
        private _http:HttpClient  
    ){
        //cargamos la ruta del api que esta en global
        this.url = Global.url;
    }

    pruebas(){
        return "Soy el servicio de articulos!!!!"
    }

    //Observable<any> tenemos que indicarle eso si no no cargaran los articles
    //Observable<any> le indico al metodo que lo que va a retornar es un observable
    //last:any = null le paso el parametro last y por defecto viene null
    //last este parametro lo utilizo para traerme el articulo reciente
    getArticles(last:any = null):Observable<any>{
        //traigo todos los articulos
        var articles = 'articles';
        if(last != null){
            //traigo el articulo segun el parametro
            var articles = 'articles/true';
        }
        return this._http.get(this.url+articles);
    }

    //articleId  nos traemos el id del articulo
    getArticle(articleId):Observable<any>{
        return this._http.get(this.url+"article/"+articleId);
    }

    //search  Metodo para hacer busquedas
    search(searchString):Observable<any>{
        //peticion http o peticion ajax al APIRES
        return this._http.get(this.url+'search/'+searchString);
    }

    //Metodo para crear un nuevo articulo  
    create(article):Observable<any>{
        //Convertimos el objeto literal de JS en un JSON string
        //porque no puedo pasar obj js se le pasan obj convertidos a string
        let params = JSON.stringify(article);
        //hearders configura las cabeseras ejem Content-Type, autorizaciones u otras
        //application/json porque el api va arecibir unos datos en JSON
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        //peticion http o peticion ajax al APIRES
        return this._http.post(this.url+'save/', params, {headers:headers});
    }
    //metodo para actualizar un articulo
    update(id,article):Observable<any>{
        //Convertimos el objeto literal de JS en un JSON string
        //porque no puedo pasar obj js se le pasan obj convertidos a string
        let params = JSON.stringify(article);
        //hearders configura las cabeseras ejem Content-Type, autorizaciones u otras
        //application/json porque el api va arecibir unos datos en JSON
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //peticion http o peticion ajax al APIRES
        return this._http.put(this.url+'article/'+id, params, {headers:headers});
    }
    //Metodo para borrar un articulo
    delete(id):Observable<any>{
        //hearders configura las cabeseras ejem Content-Type, autorizaciones u otras
        //application/json porque el api va arecibir unos datos en JSON
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //peticion http o peticion ajax al APIRES
        return this._http.delete(this.url+'article/'+id, {headers:headers});
    }

}


























