import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    SharedModule,
  ]
})
export class PrimeNgModule { }
