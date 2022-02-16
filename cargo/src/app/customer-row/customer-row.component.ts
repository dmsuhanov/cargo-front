import { Component, Input, OnInit } from '@angular/core';
import { CustomerResponse } from '../model/model.response';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.scss']
})
export class CustomerRowComponent implements OnInit {

  @Input()
  customer!: CustomerResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
