import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsrsListComponent } from './usrs-list/usrs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsrsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: UsrsListComponent },
      // {path: '', }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

