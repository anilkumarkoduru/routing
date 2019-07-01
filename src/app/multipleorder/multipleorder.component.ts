import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
//import * as frLocale from 'date-eg/locale/';
// import * as enLocale from 'date-fns/locale/en';
// import * as frLocale from 'date-fns/locale/fr';

import { MultipleorderService } from '../multipleorder.service';

export interface MultipleOrderJsonData{

}

@Component({
  selector: 'app-multipleorder',
  templateUrl: './multipleorder.component.html',
  styleUrls: ['./multipleorder.component.css']
})
export class MultipleorderComponent implements OnInit {
  showTable : boolean= false;
  multipleorderjson : MultipleOrderJsonData;

  constructor(
	  private multipleservice : MultipleorderService
  ) {
	// this.date = new Date();
	
  }

  ngOnInit() {
  }

  onSubmit(){
      this.multipleservice.getData().subscribe(      
        (res) => {
          this.showTable = true;
            this.multipleorderjson = res;
        }
      )
  }

}
