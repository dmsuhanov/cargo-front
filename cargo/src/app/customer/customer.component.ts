import { Component, OnInit } from '@angular/core';
import { CustomerResponse } from '../model/model.response';
import { CargoClientService } from '../service/cargo-client/cargo-client.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: CustomerResponse[] = [];

  constructor(private cargoClient: CargoClientService) { }

  ngOnInit(): void {
    this.cargoClient.getAllCustomers()
    .subscribe((result) => {
      this.customers = result
    });
  }

}
