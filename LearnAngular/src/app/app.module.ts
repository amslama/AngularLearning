import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColorchangerDirective } from './colorchanger.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorchangerDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
