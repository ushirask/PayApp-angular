import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

export interface Section {
  id: string;
  amount: string;
  updated: Date;
  link:string;
}

@Component({
  selector: 'app-electricity-bills',
  templateUrl: './electricity-bills.component.html',
  styleUrls: ['./electricity-bills.component.css']
})


export class ElectricityBillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bills: Section[] = [
    {
      id: '001',
      updated: new Date('1/1/16'),
      amount:'500',
      link: 'www.google.com'
    },
    {
      id: '002',
      updated: new Date('1/17/16'),
      amount:'500',
      link: 'www.google.com'
    },
    {
      id: '003',
      updated: new Date('1/28/16'),
      amount:'500',
      link: 'www.google.com'
    }
  ];
}
