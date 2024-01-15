import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    
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