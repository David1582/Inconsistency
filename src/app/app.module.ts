import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { AvengersEndgameComponent } from './main-content/web-pages/avengers-endgame/avengers-endgame.component';
import { CaptainMarvelComponent } from './main-content/web-pages/captain-marvel/captain-marvel.component';
import { AvengersInfinityWarComponent } from './main-content/web-pages/avengers-infinity-war/avengers-infinity-war.component';
import { HttpClientModule } from '@angular/common/http';
import { WebsitesService } from './main-content/web-pages/websites.service';
import { NephewDeleteThisComponent } from './nephew-delete-this/nephew-delete-this.component';
import { DefinitionsComponent } from './main-content/web-pages/definitions/definitions.component'

const appRoutes: Routes = [
  { path: 'home', component: MainContentComponent},
  { path: 'definitions', component: DefinitionsComponent},
  { path: 'avengersendgame', component: AvengersEndgameComponent},
  { path: 'avengersinfinitywar', component: AvengersInfinityWarComponent},
  { path: 'captainmarvel', component: CaptainMarvelComponent},
  { path: 'test', component: NephewDeleteThisComponent}
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
    NephewDeleteThisComponent,
    DefinitionsComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [WebsitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
