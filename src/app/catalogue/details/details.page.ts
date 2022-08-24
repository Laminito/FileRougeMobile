import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/Services/catalogue.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  singleProduct!:any;


  @Input() productList:any|undefined;

    constructor(private cs:CatalogueService,private activatedRoute: ActivatedRoute,private domSanitizer:DomSanitizer) { }

    recupeId!:number ;


    ngOnInit(): void {
      this.recupeId = +this.activatedRoute.snapshot.params['id'];
      this.cs.getOneBurger(this.recupeId).subscribe(item => {
        this.singleProduct=item;
          // console.log(this.singleProduct.prix);
      })

    }


    transform(params: string){
      return this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
    }


}
