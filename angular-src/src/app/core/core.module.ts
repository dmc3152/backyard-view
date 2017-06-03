import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from "./core-routing.module";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }