import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router: Router){

  }

  userdata: any

  loginform=this.builder.group({
    username:this.builder.control("",Validators.required),
    password:this.builder.control("",Validators.required),
  });

  proceedLogin(){
    if(this.loginform.value) {
      this.service.GetUserbyusername(this.loginform.value).subscribe(res => {
        this.userdata = res;
        console.log(this.userdata)
      })
  }

}
}
