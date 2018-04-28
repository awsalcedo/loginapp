import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(private authService:AuthService, private router:Router, private flashMensaje:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((respuesta)=>{
      this.flashMensaje.show('Usuario logeado correctamente',{cssClass: 'alert-success', timeout: 4000});
      //Redireccionamos a la pagina privada
      this.router.navigate(['/privado']);
    }).catch((error)=>{
      this.flashMensaje.show(error.message,{cssClass: 'alert-danger', timeout: 4000});
      //console.log(error);
      this.router.navigate(['/login']);
    });
  }

}
