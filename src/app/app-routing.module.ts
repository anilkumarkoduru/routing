import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleorderComponent } from './singleorder/singleorder.component';
import { MultipleorderComponent } from './multipleorder/multipleorder.component';

const routes: Routes = [
  {path:'singleorder' , component: SingleorderComponent},
  {path:'multipleorder' , component: MultipleorderComponent},
  {
    path:'',
    redirectTo:'/multipleorder',
    pathMatch:'full'
  },
  { path: '**', component: MultipleorderComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
