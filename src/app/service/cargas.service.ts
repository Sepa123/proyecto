import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Carga } from '../modelos/cargas.interface';
// import {Observable, Subject} from "rxjs"
// import {tap} from "rxjs/operators"



@Injectable({
  providedIn: 'root'
})
export class CargasService {


  constructor(private http: HttpClient) { }

  apiurl="http://127.0.0.1:8000/api/reportes"
  
  Getcargas(){
    return this.http.get<Carga[]>(this.apiurl+"/cargas_easy")
  }

}
