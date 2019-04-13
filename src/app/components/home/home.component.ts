import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MainServiceService} from '../../Services/main-service.service';
import {SearchDetails} from '../../models/SearchDetails';
export interface PlaceType {
  value:string;
  viewValue:string;
}
export interface Range {
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model = new SearchDetails();
  @Input() value:number;
  constructor(private router: Router, private spinner: NgxSpinnerService, private mainService:MainServiceService) { }
  ngOnInit() {
   
  }
  submitt(f:SearchDetails){
    this.spinner.show();
    
    setTimeout(()=>{
      this.spinner.hide();
      console.log(this.model);
      this.mainService.setSearchQuery(this.model);
      this.mainService.requestPlaces(this.model);
    

      this.router.navigate(['results']);
    },1000);
  }
  types:PlaceType[] = [
    {value:'restaurant',viewValue:'Restaurant'},
    {value:'bar',viewValue:'Bar'},
    {value:'meal_delivery',viewValue:'Delivery'}
  ];
  ranges:Range[] = [
    {value:'5',viewValue:'5 Mi'},
    {value:'10',viewValue:'10 Mi'},
    {value:'15',viewValue:'15 Mi'},
    {value:'25',viewValue:'25 Mi'}
  ];

  formatLabel( ) {
    return this.value;
   
  }

  
  
  
}
