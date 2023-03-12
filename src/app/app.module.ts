import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
