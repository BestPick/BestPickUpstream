import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePhonesComponent } from './home-page/home-phones/home-phones.component';

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
