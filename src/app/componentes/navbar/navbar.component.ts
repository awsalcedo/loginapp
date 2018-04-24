import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin:boolean;
  public nombreUsuario:string;
  public emailUsuario:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    //devuelve el estado si está logeado o no un usuario
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      }else{
        this.isLogin = false;
      }
    });
  }

  onClickLogout(){
    this.authService.logout();
  }


}
