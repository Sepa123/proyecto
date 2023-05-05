import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserList } from '../modelos/user.interface';


@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})
export class UserlistingComponent {

  constructor (private service:AuthService){}


  users!: UserList[]
  displayedColumns: string[] = ['id', 'username'];
  
  

  ngOnInit() {
    this.service.GetAll().subscribe( data => {
      this.users = data;
      
    })
  }

}
