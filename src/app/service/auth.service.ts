import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { UserList } from '../modelos/user.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiurl="http://127.0.0.1:8000"
  GetAll(){
    return this.http.get<UserList[]>(this.apiurl+"/select")
  }

  GetUserbyusername(code:any){
    return this.http.post(this.apiurl+"/login",code);
  }

  Proceedregister(inputdata:any){
    // insert
    return this.http.post(this.apiurl+"/insert",inputdata);
  }
    // TODO: No he realizado un update a la base de datos
  Updateuser(code:any, inputdata:any, ){
    return this.http.put(this.apiurl+"/"+code,inputdata);
  }
  // TODO: Verificar con el servidor si las credenciales son correctas


  

}
