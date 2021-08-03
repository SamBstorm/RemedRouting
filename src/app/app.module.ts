import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedPageComponent } from './Components/red-page/red-page.component';
import { BluePageComponent } from './Components/blue-page/blue-page.component';
import { YellowPageComponent } from './Components/yellow-page/yellow-page.component';
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RedPageComponent,
    BluePageComponent,
    YellowPageComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
