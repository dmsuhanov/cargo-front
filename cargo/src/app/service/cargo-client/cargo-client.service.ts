import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CustomerResponse } from "src/app/model/model.response"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargoClientService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers():Observable<CustomerResponse[]> {
    return this.httpClient.get<CustomerResponse[]>('/api/customer');
  }

}
