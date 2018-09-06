import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule

  ],
  providers: [HttpClientModule,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
