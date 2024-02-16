import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {User_Service} from "../user_.service";
import {PostInputUser} from "../../dto/dto_post/dto_post";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-user_profile',
  templateUrl: './user_profile.component.html',
  styleUrls: ['./user_profile.component.css']
})

export class User_profileComponent implements OnInit {
  @Input()
  user: PostInputUser | null = null;
  private cookieValue: string;

  constructor(private cookieService: CookieService, public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef, private _profileService: User_Service, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //Paginator
    this.changeDetectorRef.detectChanges();
    this.fetchUserData();
    this.cookieValue = this.cookieService.get('CookieSuper');
    console.log(this.cookieValue);
  }

  private fetchUserData() {
    this._profileService
      .fetchClientById().subscribe(user => this.user = user);
  }
}
