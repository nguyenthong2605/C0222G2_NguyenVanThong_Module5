import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {RentType} from '../../model/rentType';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];
  constructor() {
    const rentType: RentType[] = [{id: 1, name: 'year'}, {id: 2, name: 'month'}, {id: 3, name: 'day'}, {id: 4, name: 'year'}];
    // tslint:disable-next-line:max-line-length
    this.facility.push({id: 1, name: 'Room_1', area: 1000, cost: 10000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 20, rentType: {id: 1, name: 'year'}});
    // tslint:disable-next-line:max-line-length
    this.facility.push({id: 2, name: 'Room_2', area: 2000, cost: 20000, descriptionOtherConvenience: 'PHÒNG STUDIO SUITE HƯỚNG BIỂN', maxPeople: 10, rentType: {id: 2, name: 'month'}});
    // tslint:disable-next-line:max-line-length
    this.facility.push({id: 3, name: 'Room_3', area: 3000, cost: 30000, descriptionOtherConvenience: 'PHÒNG DELUXE HƯỚNG BIỂN', maxPeople: 15, rentType: {id: 3, name: 'day'}});
    // tslint:disable-next-line:max-line-length
    this.facility.push({id: 4, name: 'Room_4', area: 4000, cost: 40000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 7, rentType: {id: 4, name: 'year'}});
    // tslint:disable-next-line:max-line-length
    this.facility.push({id: 5, name: 'Room_5', area: 5000, cost: 50000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 9, rentType: {id: 1, name: 'year'}});
    this.facility.push({id: 5, name: 'Room_5', area: 5000, cost: 50000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 9, rentType: {id: 1, name: 'year'}});
    this.facility.push({id: 5, name: 'Room_5', area: 5000, cost: 50000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 9, rentType: {id: 1, name: 'year'}});
    this.facility.push({id: 5, name: 'Room_5', area: 5000, cost: 50000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 9, rentType: {id: 1, name: 'year'}});
    this.facility.push({id: 5, name: 'Room_5', area: 5000, cost: 50000, descriptionOtherConvenience: 'PHÒNG SUITE HƯỚNG BIỂN ĐẸP', maxPeople: 9, rentType: {id: 1, name: 'year'}});
  }

  ngOnInit(): void {
  }

}
