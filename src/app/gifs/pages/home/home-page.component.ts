import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-homepage',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor( private SVC_Gif: GifsService){}

  get SVC_Get_Gifs(): Gif[] {
    return this.SVC_Gif.Obj_Gifs;
  }
}
