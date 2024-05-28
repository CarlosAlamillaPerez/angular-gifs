import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private gifsService: GifsService){}

  @ViewChild('txtSearch')
  public ImputSearch!: ElementRef<HTMLInputElement>;

  emit_Search(){
    let Search = this.ImputSearch.nativeElement.value;

    this.gifsService.Search_Gifs(Search)

    this.ImputSearch.nativeElement.value = "";
  }
}
