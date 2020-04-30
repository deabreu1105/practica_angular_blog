//Para recibir la propiedad input tengo que importar Input
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  //aqui recibo la propiedad input de app.component.html que es el componente padre
  @Input() nombre:string;
  @Input() size:string;

  constructor() { }

  ngOnInit() {
  }

}
