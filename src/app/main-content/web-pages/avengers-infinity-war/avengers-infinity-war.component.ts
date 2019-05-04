import { Component, OnInit } from '@angular/core';
import pingus from './namecounter.json';


@Component({
  selector: 'app-avengers-infinity-war',
  templateUrl: './avengers-infinity-war.component.html',
  styleUrls: ['./avengers-infinity-war.component.css']
})
export class AvengersInfinityWarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  peanut() {
    console.log(pingus);
  }



}
