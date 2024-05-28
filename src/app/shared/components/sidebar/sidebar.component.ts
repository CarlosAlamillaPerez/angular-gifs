import { Component, output } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private svc_Gifs: GifsService){}

  get List_Tag(): string[] {
    return this.svc_Gifs.Obtener_Historial
  }


  public emit_Tag(tag: string):void{
    this.svc_Gifs.Search_Gifs(tag)
  }
}
