import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Visitor_Service} from "../visitor_.service";

@Component({
  selector: 'app-visitor_login',
  templateUrl: './visitor_login.component.html',
  styleUrls: ['./visitor_login.component.css']
})
//Handler of the login for visitor
export class Visitor_loginComponent implements OnInit{

  invalidLogin: boolean=false;
  form: FormGroup = this.fb.group({
    mail: this.fb.control("", Validators.required),
    password: this.fb.control("", Validators.required),
  });
  hide = true;

  constructor(private fb: FormBuilder, private _visitorService: Visitor_Service, private  router: Router) {
  }

  ngOnInit(): void {
  }

  sendLogin() {
    console.log(this.form.value);

    const credentials = {
      'mail': this.form.value.mail,
      'hashedPassword': this.form.value.password
    }


    this._visitorService.loginVisitor(credentials).subscribe(response =>{
        this.invalidLogin = false;
        this.router.navigate(['/user_profile'])
      },
      err=>{
        if(err)
        {
          console.log(this.invalidLogin);
          this.invalidLogin = true;
        }
      }
    );
    this.form.reset()
  }
}
