import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
//Para redireccionar a la pagina privada cuando se loguee
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(private autService:AuthService, private router:Router, private flashMensaje:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.autService.registerUser(this.email,this.password)
    .then((respuesta)=>{
      //una vez que el usuario se haya registrado se le notificará que todo el registro ha sido correcto
      this.flashMensaje.show('Usuario creado correctamente.', {cssClass: 'alert-success', timeout: 4000});

      //redireccionar a la página privada
      this.router.navigate(['/privado']);
      console.log('BIEN!!!!!!');
      console.log(respuesta);
    }).catch((error)=>{
      this.flashMensaje.show(error.message,{cssClass: 'alert-danger', timeout: 4000});
      //console.log(error);
    });
  }

}
