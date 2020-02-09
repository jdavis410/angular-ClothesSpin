import { Component, OnInit } from '@angular/core';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-dropoff',
  templateUrl: './dropoff.component.html',
  styleUrls: ['./dropoff.component.css']
})
export class DropoffComponent implements OnInit {
  latitude = 0;
  longitude = 0;
  mapType = 'roadmap';
  spinnerSelected = false;

  selectedSpinner = {
    name: '',
    imageUrl: ''
  };

  laundryOrder = {
  };

  spinners = [
    {lat: 28.9398398 , lng: -72.36548839999999, name: 'Joshua' , rating: 4},
    {lat: 31.9398398 , lng: -80.36548839999999, name: 'John' , rating: 2},
    {lat: 45.9398398 , lng: -93.36548839999999, name: 'Kimberly' , rating: 5},
    {lat: 23.9398398 , lng: -73.36548839999999, name: 'Jorge' , rating: 3.4},
    {lat: 33.9398398 , lng: -83.36548839999999, name: 'Shawn' , rating: 2.5},
    {lat: 34.9398398 , lng: -82.36548839999999, name: 'Paula' , rating: 4}
  ];

  constructor(private locationService: LocationService) {
    let pos = this.locationService.getPosition().then(
      res => {
        console.log(res);
        this.latitude = res.lat;
        this.longitude = res.lng;
      });
  }

  ngOnInit() {
  }

  // getLat() {
  //   return this.locationService.getPosition()
  //     .then(pos => pos.lat);
  // }
  //
  // getLong() {
  //   return this.locationService.getPosition()
  //     .then(pos => { return pos.lng });
  // }

  selectSpinner(spinner) {
    this.selectedSpinner.name = spinner.name;
    this.selectedSpinner.imageUrl = spinner.imageUrl;
    this.spinnerSelected = true;
  }


}
