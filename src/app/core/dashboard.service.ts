import { Injectable } from '@angular/core';

import { enviroment } from "../../env";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  private serviceURL = enviroment.serverURL;

  constructor(private http: HttpClient) { }

  monthSumary(){
    return this.http.get<any>(`${this.serviceURL}/monthsumary`);
  }
}
