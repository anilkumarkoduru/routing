import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleorderComponent } from './singleorder/singleorder.component';
import { MultipleorderComponent } from './multipleorder/multipleorder.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { ReportsComponent } from './reports/reports.component';
import { SingleorderserviceService } from './singleorderservice.service';
import { MultipleorderService } from './multipleorder.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SingleorderComponent,
    MultipleorderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    NgDatepickerModule,
    HttpClientModule

    
   
  ],
  providers: [SingleorderserviceService,MultipleorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
