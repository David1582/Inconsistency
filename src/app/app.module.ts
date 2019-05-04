import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { AvengersEndgameComponent } from './main-content/web-pages/avengers-endgame/avengers-endgame.component';
import { CaptainMarvelComponent } from './main-content/web-pages/captain-marvel/captain-marvel.component';
import { AvengersInfinityWarComponent } from './main-content/web-pages/avengers-infinity-war/avengers-infinity-war.component';

const appRoutes: Routes = [
  { path: 'home', component: MainContentComponent},
  { path: 'avengersendgame', component: AvengersEndgameComponent},
  { path: 'avengersinfinitywar', component: AvengersInfinityWarComponent},
  { path: 'captainmarvel', component: CaptainMarvelComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainContentComponent,
    AvengersEndgameComponent,
    CaptainMarvelComponent,
    AvengersInfinityWarComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
