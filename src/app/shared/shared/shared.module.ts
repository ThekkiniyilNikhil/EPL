import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NameAbbreviatePipe } from './name-abbreviate.pipe';
import { FindScorePipe } from './find-score.pipe';
import { FindSecondScorePipe } from './find-second-score.pipe';

@NgModule({
  declarations: [NameAbbreviatePipe, FindScorePipe, FindSecondScorePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NameAbbreviatePipe,
    FindScorePipe,
    FindSecondScorePipe
  ]
})
export class SharedModule { }
