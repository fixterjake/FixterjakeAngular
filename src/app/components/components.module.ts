
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    BrowserAnimationsModule,
    NgbModule
  ]
})
export class ComponentsModule {}




