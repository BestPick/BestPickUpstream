import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SizeComponent } from './size/size.component';
import { BrandComponent } from './brand/brand.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SizeComponent,
        BrandComponent,
        BudgetComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
