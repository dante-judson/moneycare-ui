import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Entry } from "./entry";
import { enviroment } from "../../env";

@Injectable()
export class EntryService {

  private serviceURL = `${enviroment.serverURL}/entry`;

  constructor(private http:HttpClient) { }

}
