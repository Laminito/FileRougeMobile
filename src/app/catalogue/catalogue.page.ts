import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';

import { CatalogueService } from '../Services/catalogue.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  product: any[] = [];
  menu: any;
  burger: any;
  item:any;
  element: string;

  constructor(private cs:CatalogueService,private domSanitizer:DomSanitizer,private me: MenuController) { }

  imagePath= 'https://images.unsplash.com/photo-1550259114-ad7188f0a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

  ngOnInit() {

    this.cs.getProducts().subscribe(element=>{
      this.product.push(element['burger']);
      this.product.push(element['menu']);
        this.burger=this.product[0],
        this.menu=this.product[1]
        console.log(this.product);
    })
}



transform(params: string){
  return this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
}
openFirst() {
  this.menu.enable(true, 'first');
  this.menu.open('first');
}

openEnd() {
  this.me.open('end');
}

openCustom() {
  this.me.enable(true, 'custom');
  this.me.open('custom');
}




}
