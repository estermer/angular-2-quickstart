import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { SignIn }        from './components/signin.component';
import { Profile }       from './components/profile.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SignIn, Profile ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
