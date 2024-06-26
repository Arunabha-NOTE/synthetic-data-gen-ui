import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatagenComponent } from './datagen/datagen.component';

const routes: Routes = [
  {
    path: '',
    component: DatagenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatageneratorRoutingModule { }
