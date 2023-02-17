import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SearchBoxPipe } from './pipe/search-box.pipe';
import { CheckSalePipe } from './pipe/check-sale.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, SearchBoxPipe, MainScreenComponent, CheckSalePipe ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
