import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

@Input() allprods:any
@Output() onSelected:EventEmitter <any> = new EventEmitter<any>();

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
     console.log(this.allprods);

}

transform(params: string){
  return this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
}

}
