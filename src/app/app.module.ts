import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { AppComponent }  from './app.component';
import {FillTSComponent} from './FillTS/FillTS.component'
import {ViewTSComponent} from './ViewTS/ViewTS.component'
import { RouterModule} from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot([
    { path: 'FillTimesheet', component: FillTSComponent },
    { path: 'ViewTimesheet', component: ViewTSComponent }
  ])],
  declarations: [ AppComponent, FillTSComponent, ViewTSComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
