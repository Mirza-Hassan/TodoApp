import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,NoopAnimationsModule,MdButtonModule,MdCheckboxModule,MaterialModule,MdInputModule,
AngularFireDatabaseModule,AngularFireAuthModule,
   AngularFireModule.initializeApp(environment.firebase)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
