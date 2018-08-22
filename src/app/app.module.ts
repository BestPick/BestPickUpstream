import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


firebase.initializeApp(environment.firebaseConfig);
@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
