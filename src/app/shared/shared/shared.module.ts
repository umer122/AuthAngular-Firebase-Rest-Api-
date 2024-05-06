import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    PrimeNgModule,
  ],
exports:[
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  // HttpClientModule,
  PrimeNgModule
]
})
export class SharedModule {}