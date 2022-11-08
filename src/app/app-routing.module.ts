import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'navigator',
    component: ListComponent,
  },
  {
    path: '',
    component: SummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
