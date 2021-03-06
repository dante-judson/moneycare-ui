import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Entry } from "./entry";
import { enviroment } from "../../env";
import { ReportFilter } from "./report-filter";

@Injectable()
export class ReportService {

  private serviceURL = enviroment.serverURL;

  constructor(
    private http: HttpClient
  ) { }

  monthStatement(){
    return this.http.get<Entry[]>(`${this.serviceURL}/monthstatement`);
  }

  report(filter: ReportFilter){
    return this.http.get<Entry[]>(`${this.serviceURL}/report/${filter.initialDate} 00:00/${filter.finalDate} 23:59/${filter.type}/${filter.description}`);
  }
}
