import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute, Params } from '@angular/router';
//Importamos el sweetalert para mejorar las alertas
import swal from 'sweetalert';
//Importamos el modelo article
import { Article } from '../../models/article';
//Importamos el ArticleService
import { ArticleService } from '../../services/article.service';
//Importo Global para guardar las imagenes
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',  ///Aqui utilizo la vista de article-new
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]  //cargo el servicio para poder inyectarlo
})
export class ArticleEditComponent implements OnInit {

  public article:Article;
  public status:string;
  
  //Nos creamos este atributo para transformarlo a editar
  public is_edit:boolean;
  public page_title:string;
  public url:string;  //para poder trabajar con las imagenes

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg", //formatos permitodos
    maxSize: "50",   //tamaño del archivo
    uploadAPI:  {
      url: Global.url+'upload-image' //utilizo la url del backend
    },
    theme: "attachPin",   //el formulario mas clasico posible
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    //cargo en el constructor ArticleService
    private _articleService:ArticleService
  ) { 

    
    this.article = new Article('','','', null, null); //se va a rellenar cuanto llame a getArticle()
    //y asi apareseran los valores encada campo del formulario
    this.is_edit = true;   /////Inicializamos isedit como true
    this.page_title = "Editar articulo";

    this.url = Global.url;//para poder trabajar con las imagenes
  }

  ngOnInit() { 
    this.getArticle();
  }

  //Nostraemos los valores de la base de datos
  getArticle(){
    //recojemos el parametro de search de la vista article.component.html
    this._route.params.subscribe((params:Params) => {
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
          console.log("Hola");
          console.log(error);
        }
      );

    });
  }

  onSubmit(){
    //console.log(this.article);
    //  this.article._id   paraque guarde solo los cambio de un id en particular
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          //console.log(response);

          //Alerta
          swal(
            'Articulo editado!!',
            'El articulo se ha editado correctamente',
            'success'
          );
          ///blog/articulo',this.article._id se redirecciona al articulo modificado
          this._router.navigate(['/blog/articulo',this.article._id]);
        }else{
          this.status ="error";
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        //Alerta
        swal(
          'Edición fallida!!',
          'El articulo no se ha editado correctamente',
          'error'
        );
      }

    );

  }

  imageUpload(data){
    //Formateamos lo que llega a un objeto JSON
    let image_data = JSON.parse(data.response);
    //console.log(image_data);
    //alert(image_data.image);
    //guardamos en el modelo article en la propiedad image el nombre
    this.article.image = image_data.image;
  }

}
