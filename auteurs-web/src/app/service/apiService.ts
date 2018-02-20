import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {book} from "../models/bookModel"
import {Observable} from "rxjs/Observable";


export class ApiService {
  baseURL: string="http://localhost:3000";
  constructor(private http:HttpClient) {
  }

  getBook(id:number) : Observable<book> {
    return this.http.get<book>(this.baseURL + '/book/' + id)
  }
}
