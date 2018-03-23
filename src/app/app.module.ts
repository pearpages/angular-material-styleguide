import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StyNavigatonModule } from './nav';
import { PagesModule } from './pages';
import { SharedModule } from './shared';

const routes: Routes = [
  {
    path: 'examples',
    loadChildren: 'app/sections/sections.module#SectionsModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    StyNavigatonModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
