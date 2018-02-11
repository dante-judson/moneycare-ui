import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Entry } from "./entry";
import { enviroment } from "../../env";

@Injectable()
export class EntryService {

  private serviceURL = `${enviroment.serverURL}/entry`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Entry[]>(this.serviceURL);
  }

  monthStatement(){
    return this.http.get<Entry[]>(`${enviroment.serverURL}/monthstatement`);
  }

  save(entry: Entry) {
    return this.http.post<Entry>(this.serviceURL, entry);
  }

  findById(id: string){
    return this.http.get<Entry>(`${this.serviceURL}/${id}`);
  }

  update(entry: Entry){
    return this.http.put<Entry>(`${this.serviceURL}/${entry._id}`,entry);
  }

  delete(id: string){
    return this.http.delete<any>(`${this.serviceURL}/${id}`);
  }
}
