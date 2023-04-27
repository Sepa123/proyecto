import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router: Router){

  }

  registerform=this.builder.group({
    id: "",
    username:this.builder.control("",Validators.required),
    password:this.builder.control("",Validators.required),
  });

  proceedregister(){
    console.log(this.registerform.value)
    if (this.registerform.valid){
      this.service.Proceedregister(this.registerform.value).subscribe(res => {
        this.toastr.success("Registrado exitosamente");
        this.router.navigate(["login"])
      });
    }else{
      this.toastr.warning("por favor ingrese datos validos");
      
    }
  }
}
