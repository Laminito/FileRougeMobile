import { SharedDirectivesModule } from './../directives/shared-directives.module';
import { CardPageModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import { DetailsPageModule } from './details/details.module';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    CardPageModule,
    SharedDirectivesModule,
    DetailsPageModule,
    IonicHeaderParallaxModule,
  ],
  declarations: [CataloguePage]
})
export class CataloguePageModule {}
