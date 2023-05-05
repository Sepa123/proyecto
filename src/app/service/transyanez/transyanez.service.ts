import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class TransyanezService {

  constructor(private http:HttpClient ) { }

  apiurl = "http://127.0.0.1:8000/api/transyanez/resumen_vehiculos_portal_"
  
  downloadResumenVehiculos() {
    let date = new Date();
    const fechaActual = date.toISOString().split('T')[0];

    this.http.get(this.apiurl+fechaActual, {responseType:"blob"})
    .subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      a.download = `resumen_vehiculos_portal_${fechaActual}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
    })
  }
}
