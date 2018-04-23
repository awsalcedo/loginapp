import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
//Para redireccionar a la pagina privada cuando se loguee
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(private autService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.autService.registerUser(this.email,this.password)
    .then((respuesta)=>{
      //redireccionar a la página privada
      this.router.navigate(['/privado']);
      console.log('BIEN!!!!!!');
      console.log(respuesta);
    }).catch((error)=>{
      console.log(error);
    });
  }

}
