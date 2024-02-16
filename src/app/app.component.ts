import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {User_Service} from "./user_hub/user_.service";
import {Router} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";
import {AdminGuard} from "./guards/admin.guard";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'test5';
  client: any;

  constructor(private http:HttpClient, private cookie:CookieService, private _userService: User_Service, private router: Router, public _authGuard: AuthGuard, public _adminGuard: AdminGuard) {
  }

  logOut() {
    this._userService
      .disconnect();
    this.router.navigate(["/home_page"]);
  }

  ngOnInit(): void {
  }

}
