import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [ContactComponent, HelpComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
