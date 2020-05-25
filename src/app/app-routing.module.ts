import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//////////////////
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
{
  path: '',
  component: CompOneComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'prof',
  component: CompTwoComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
