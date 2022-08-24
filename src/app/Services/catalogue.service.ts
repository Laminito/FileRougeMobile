import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  tabProduit:any[]=[];


  constructor(private http:HttpClient,private domSanitizer:DomSanitizer) { }

  private readonly PRODUIT_API_URL = 'http://127.0.0.1:8001/api/ProductCatalogues';
  private readonly PRODUIT_API__Burger_URL = 'http://127.0.0.1:8001/api/burgers/';
  private readonly PRODUIT_API__Menu_URL = 'http://127.0.0.1:8001/api/menus/';



  public getProdTab(){
    this.getProducts()
    .subscribe(params => {
      this.tabProduit=params;

    });
    return this.tabProduit;
  }





  public getProducts():Observable<any>{

     return this.http.get<any>(this.PRODUIT_API_URL)

   }


   public transform(params: string){
    return this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

  public getOneBurger(id: number): Observable<any> {
    return this.http.get<any>(this.PRODUIT_API__Burger_URL+id);
  }

  public getOneMenu(id: number): Observable<any> {
    return this.http.get<any>(this.PRODUIT_API__Menu_URL+id);
  }

}
