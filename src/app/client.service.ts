import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class ClientService {
  serviceUrl ='http://localhost:9090//';
  // 'http://localhost:9090//memberBenefitCodes/1008477';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.serviceUrl);
  }
  postData(obj:any){
    return this.http.post(this.serviceUrl+'api/CheckProcedureAndDiagnosisCodes',obj);
  }
}
