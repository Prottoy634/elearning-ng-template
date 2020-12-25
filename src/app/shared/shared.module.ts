import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberTrackerComponent } from './components/number-tracker/number-tracker.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NumberTrackerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NumberTrackerComponent
  ]
})
export class SharedModule { }
