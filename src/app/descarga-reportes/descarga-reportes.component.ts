import { Component } from '@angular/core';
import { TransyanezService } from '../service/transyanez/transyanez.service';
@Component({
  selector: 'app-descarga-reportes',
  templateUrl: './descarga-reportes.component.html',
  styleUrls: ['./descarga-reportes.component.scss']
})



export class DescargaReportesComponent {

  constructor (private service: TransyanezService) {}

  download(){
    this.service.downloadResumenVehiculos()
  }
  fecha(){
    let date = new Date();
    console.log(date.toISOString().split('T')[0]);

    console.log(typeof date.toISOString().split('T')[0])
  }

}
