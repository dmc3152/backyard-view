import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SwiperModule } from '../../../node_modules/angular2-useful-swiper';
import { SwiperModule } from 'angular2-useful-swiper';

import { CoreRoutingModule } from "./core-routing.module";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    CoreRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    FeaturesComponent,
    PricingComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
