import { Component, OnInit,ChangeDetectorRef,NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { CargasService } from '../service/cargas.service';
import { Carga } from '../modelos/cargas.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data$! :  Observable<any[]>
  constructor(private service: CargasService, private changeDetector : ChangeDetectorRef, private ngZone: NgZone){}

  carga!: Carga[]

  ngOnInit(): void{
    this.data$ = this.service.Getcargas();

    this.data$.subscribe(() => {
      this.ngZone.run(() => {
        this.changeDetector.detectChanges()
      })
    })
    this.service.Getcargas().subscribe(data => {
      this.carga = data
    })
  }
}
