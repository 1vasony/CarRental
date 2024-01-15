import { Component , OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any ={

      userName:'',
      email:'',
      password:'',
      phno:''
  };

  LoginObj:any ={

      userName:'',
      password:''
  };
  
  constructor() {}

  ngOnInit(): void {
      
  }

  onSignup(){
     this.signupUsers.push(this.signupObj);
     localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
  }

  onLogin(){
  //    window.open("../../home.html")
  }
}

