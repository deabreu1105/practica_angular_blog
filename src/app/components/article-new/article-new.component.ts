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
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]  //cargo el servicio para poder inyectarlo
})
export class ArticleNewComponent implements OnInit {

  public article:Article;
  public status:string;
  public page_title:string;

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
    this.article = new Article('','','', null, null); 
    this.page_title = "Crear articulo";
  }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.article);
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          //console.log(response);
            //Alerta
            swal(
              'Articulo creado',
              'El articulo se ha creado correctamente',
              'success'
            );

          this._router.navigate(['/blog']);
        }else{
          this.status ="error";
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
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




























































