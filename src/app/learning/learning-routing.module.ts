import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  
    {path:'',redirectTo:'contact',pathMatch:"full"},
    {path:"contact",component:ContactComponent},
    {path:"help",component:HelpComponent},
    {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
