import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatageneratorRoutingModule } from './datagenerator-routing.module';
import { DatagenComponent } from './datagen/datagen.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DatagenComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DatageneratorRoutingModule
  ]
})
export class DatageneratorModule { }
