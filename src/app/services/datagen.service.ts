import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatagenService {

  constructor(private apiService: ApiService) { }

    getData = (url: string, params: any): Observable<any> => {
        return this.apiService.get(url, params);
}
}
