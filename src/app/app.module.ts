import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BrandComponent } from './header/brand/brand.component';
import { ToolsComponent } from './header/tools/tools.component';
import { UserComponent } from './header/user/user.component';
import { SearchBarComponent } from './body/search-bar/search-bar.component';
import { CardAComponent } from './body/card-a/card-a.component';
import { CardBComponent } from './body/card-b/card-b.component';
import { CardCComponent } from './body/card-c/card-c.component';
import { CardDComponent } from './body/card-d/card-d.component';
import { NavComponent } from './header/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BrandComponent,
    ToolsComponent,
    UserComponent,
    SearchBarComponent,
    CardAComponent,
    CardBComponent,
    CardCComponent,
    CardDComponent,
    NavComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
