import { RedPageComponent } from './Components/red-page/red-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BluePageComponent } from './Components/blue-page/blue-page.component';
import { YellowPageComponent } from './Components/yellow-page/yellow-page.component';

const routes: Routes = [
  {path:"rouge", component: RedPageComponent},
  {path:"bleu", component: BluePageComponent},
  {path:"jaune", component: YellowPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
