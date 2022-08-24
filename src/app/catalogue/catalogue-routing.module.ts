import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguePage } from './catalogue.page';
import { DetailsPage } from './details/details.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage
  },
  {
    path: 'burger/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },


  {
    path: 'menu/:id',
    loadChildren: () => import('./detail-menu/detail-menu.module').then( m => m.DetailMenuPageModule)
  },

  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule),

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
