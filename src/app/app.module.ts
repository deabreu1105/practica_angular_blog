import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importo las rutas
import { routing, appRoutingProviders } from './app.routing';
//Importamos FormsModule para que funcione el formulario
import { FormsModule } from '@angular/forms';
//Importamos el HttpClientModule para que puedan funcionar las peticiones ajax
import { HttpClientModule } from '@angular/common/http';
//Importamos  moment para que podamos formatear las fechas de manera mas rapida
import { MomentModule } from 'angular2-moment';
//Importamos angular-file-uploader para trabajar con funcionalidades de los inputS file
import { AngularFileUploaderModule } from "angular-file-uploader";



import { AppComponent } from './app.component';
//cargando mi primer componente
import{MiComponente} from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe} from './pipes/epar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,        //cargo el modulo de las rutas
    FormsModule,     //cargo el modulo FormsModule
    HttpClientModule, //cargo el modulo HttpClientModule
    MomentModule,      //cargo el modulo MomentModule
    AngularFileUploaderModule  //cargo el modulo uploader file angular
  ],
  providers: [appRoutingProviders], //Cargo el servicio de las rutas
  bootstrap: [AppComponent]
})
export class AppModule { }
