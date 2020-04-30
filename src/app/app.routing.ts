// importar los modulos del rauter de Angular

//Permite generar un modulo para las rutas para tenerlo todo separado y cargarlo dentro del framework
import { ModuleWithProviders } from '@angular/core';
//Clases que nos permitiran generar objetos de rutas y generar la configuracion dentro de angular
import { Routes,RouterModule } from '@angular/router';

//Importar componentes a los cuales les quiero hacer una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';


//Array de rutas: para configurar las rutas a crear y cargarlas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},//
    {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent},
    {path: '**', component: ErrorComponent}   //la ruta de error siempre se carga de ultimo
                                                //   **--> significa (SI NO SE ENCUANTRA LA RUTA)
];

//para pasar parametro obligatorio a una ruta /:nombre

//Exportar el modulo de  para  Implementacion de rutas
//vacio para estableserlo como servicio
export const appRoutingProviders: any[] = [];
//Cargar toda la configuración de rutas antes creadas y que existan en appRoutes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


//FINAL MENTE SE CONFIGURAN LAS RUTAS EN EL app.module.ts