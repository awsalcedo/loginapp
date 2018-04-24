import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((respuesta)=>{
      //Redireccionamos a la pagina privada
      this.router.navigate(['/privado']);
    }).catch((error)=>{
      console.log(error);
      this.router.navigate(['/login']);
    });
  }

}
