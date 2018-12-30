import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SizeComponent } from './size/size.component';
import { BrandComponent } from './brand/brand.component';
import { BudgetComponent } from './budget/budget.component';
import { BestPickComponent } from './best-pick/best-pick.component';


firebase.initializeApp(environment.firebaseConfig);
@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SizeComponent,
        BrandComponent,
        BudgetComponent,
        BestPickComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
