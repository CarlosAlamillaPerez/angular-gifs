import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifs } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public Obj_Gifs:        Gif   []  = [];

  private Lista_Historial:  string[]  = [];
  private apiKey:           string    = 'B3MefQ1xi3f26v6XEtfhK77B2NSdKmhi';
  private UrlGifs:          string    = 'http://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
  }

  Search_Gifs(tag: string): void {
    if (tag.length === 0) return;
    this.Add_Historial(tag);

    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchGifs>(`${this.UrlGifs}/search`, { params })
      .subscribe(resp=>{
        this.Obj_Gifs = resp.data
    })
  }

  Add_Historial(tag: string) {
    tag = tag.toLowerCase();

    if (this.Lista_Historial.includes(tag)) {
      this.Lista_Historial = this.Lista_Historial.filter(
        (oldTag) => oldTag !== tag
      );
    }
    this.Lista_Historial.unshift(tag);
    this.Lista_Historial = this.Lista_Historial.splice(0, 10);
    this.saveLocalStorage();
  }
  
  get Obtener_Historial() {
    return [...this.Lista_Historial];
  }


  private saveLocalStorage():void{
    localStorage.setItem('Historial', JSON.stringify(this.Lista_Historial));
  }
  private loadLocalStorage():void{
    if (!localStorage.getItem('Historial')) return;
    this.Lista_Historial =  JSON.parse(localStorage.getItem('Historial')!);

    if(this.Lista_Historial.length === 0) return;
    this.Search_Gifs(this.Lista_Historial[0])
  }
}
