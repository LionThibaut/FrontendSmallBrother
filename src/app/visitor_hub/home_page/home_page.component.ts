import {Component, Input, OnInit} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {PostInput} from "../../dto/dto_post/dto_post";
import {Visitor_Service} from "../visitor_.service";

@Component({
  selector: 'app-home_page',
  templateUrl: './home_page.component.html',
  styleUrls: ['./home_page.component.css']
})
export class Home_pageComponent implements OnInit{

  @Input()
  posts: PostInput[] = [];

  constructor(private jwtHelper: JwtHelperService,  private _visitorService: Visitor_Service) {
  }

  ngOnInit(): void {
    this.fetchLastestPosts();
  }

  // Scroll from point A to a point B
  scrollToElement(target: HTMLElement) {
    target.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest'
    })
  }

  isUserAuthenticated(){
    const token: string= localStorage.getItem("jwt")!
    if(token && !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  private fetchLastestPosts(){
    this._visitorService.fetchLatestPosts().subscribe(posts => this.posts = posts)
  }


}
