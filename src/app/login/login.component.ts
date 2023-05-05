import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { CookieService } from "ngx-cookie-service"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router: Router, private cookie:CookieService){

  }

  userdata: any

  loginform=this.builder.group({
    username:this.builder.control("",Validators.required),
    password:this.builder.control("",Validators.required),
  });

  proceedLogin(){
    if(this.loginform.valid) {
      this.service.GetUserbyusername(this.loginform.value).subscribe(res => {
        this.userdata = res;
        this.cookie.set("token", this.userdata.access_token)
        sessionStorage.setItem('access_token',this.userdata.access_token);
        console.log(sessionStorage.getItem("access_token"))
        // sessionStorage.setItem('role',this.result.role);
        console.log(this.userdata)
        this.router.navigate(['user']);

      })
  } else{
    this.toastr.warning("por favor ingrese datos validos");
    
  }

}
}
