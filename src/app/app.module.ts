import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePhonesComponent } from './home-page/home-phones/home-phones.component';


firebase.initializeApp(environment.firebaseConfig);
@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HomePhonesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
