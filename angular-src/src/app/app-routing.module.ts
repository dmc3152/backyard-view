import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "",   redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/page-not-found", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
