import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertUserPage } from './insert-user.page';

const routes: Routes = [
  {
    path: '',
    component: InsertUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertUserPageRoutingModule {}
