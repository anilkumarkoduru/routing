import { Component, OnInit } from '@angular/core';
import { SingleorderserviceService } from '../singleorderservice.service';

export interface SingleOrderjsonData{

}

@Component({
  selector: 'app-singleorder',
  templateUrl: './singleorder.component.html',
  styleUrls: ['./singleorder.component.css']
})
export class SingleorderComponent implements OnInit {
showTable  : boolean = false;
singleorderjson  :SingleOrderjsonData;

  constructor( private singleService: SingleorderserviceService

  ) { }

  ngOnInit() {
  }


  onSubmit() {


    this.singleService.getData().subscribe
    
    (
      (val) =>{
        this.showTable = true;
        this.singleorderjson = val;
        console.log(this.singleorderjson)

      }
  )

  }


  oneway = {
    Firstname: "Anil",
    Lastname : "Kumar",
    address   : {
      street : "kp",
      phno: 9666266280,
      city:"Hyd"
    }
  }

  // singleOrderjson =
  // {
  //   "orderList": {
  //     "orderDetails": {
  //       "productNumber": "A123E",
  //       "productName": "Laptop12",
  //       "productDescription": "ABC",
  //       "productPrice": "Rs75000"
  //     },
  //     "address": {
  //       "houseNo.": 101,
  //       "laneName": "GopalNagar",
  //       "landmark": "XYZ",
  //       "district": "Medchal",
  //       "city": "Hyderabad",
  //       "state": "Telengana",
  //       "pin": 500085
  //     },
  //     "contactDetails": {
  //       "phoneNo.": 8981665041,
  //       "emailId": "apriya521@gmail.com",
  //       "alternateNo.": 9021658656
  //     }
  //   },
  //   "orderLog": [{
  //       "sNo": 1,
  //       "time": "06:10 AM",
  //       "date": "30.10.2018",
  //       "status": "Delivered",
  //       "description": "Order Delivered Sucessfully"
  //     },
  //     {
  //       "sNo": 2,
  //       "time": "09:30 AM",
  //       "date": "3.12.2018",
  //       "status": "Dispatched",
  //       "description": "Order onthe way"
  //     },
  //     {
  //       "sNo": 3,
  //       "time": "03:10 PM",
  //       "date": "3.1.2019",
  //       "status": "Created",
  //       "description": "Order Created Sucessfully"
  //     },
  //     {
  //       "sNo": 4,
  //       "time": "10:10 PM",
  //       "date": "5.1.2019",
  //       "status": "Pending",
  //       "description": "Order is Pending right now"
  //     }
  //   ]
  // }
  
}
