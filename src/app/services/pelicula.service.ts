
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas :Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula(2018,"Spiderman 4","http://pm1.narvii.com/6870/6ece9bc579b13c145f0a94f29e1d4f4888e50a9er1-616-889v2_uhq.jpg"),
            new Pelicula(2016,"Los vengadores Endgame","https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683-696x477.jpg"),
            new Pelicula(2019,"Batman vs Superman","https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683-696x477.jpg"),
            new Pelicula(2020,"Batman vs Superman 2","http://img2.rtve.es/v/3535888?w=1600&preview=1458729594522.jpg")
    
            /*{year:2018, title:"Spiderman 4", image:'http://pm1.narvii.com/6870/6ece9bc579b13c145f0a94f29e1d4f4888e50a9er1-616-889v2_uhq.jpg'},
            {year:2016, title:"Los vengadores Endgame", image:'https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683-696x477.jpg'},
            {year:2019, title:"Batman vs Superman", image:'http://img2.rtve.es/v/3535888?w=1600&preview=1458729594522.jpg'},
            {year:2020, title:"Batman vs Superman 2", image:'http://img2.rtve.es/v/3535888?w=1600&preview=1458729594522.jpg'}*/
        ];
    }

    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }

}