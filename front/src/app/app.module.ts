import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CurrentViewService } from './shared/current-view.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SpecificComponent } from './specific/specific.component';
import { ThreadItemComponent } from './thread-item/thread-item.component';
import { ThreadService } from './shared/thread.service';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ViewComponent,
    CatalogComponent,
    ThreadItemComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ModalComponent,
    SpecificComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ViewComponent}
    ])
  ],
  providers: [ThreadService, CurrentViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
