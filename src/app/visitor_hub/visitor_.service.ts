import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {OutputUser, UserCredentials} from "../dto/dto_User/dto_user";
import {InputUser} from "../dto/dto_User/dto_user";
import {Observable} from "rxjs";
import {PostInput} from "../dto/dto_post/dto_post";

@Injectable({
  providedIn: 'root'
})

//Page for the visitor of the site (no connected user or new user)
export class Visitor_Service {

  private static readonly ENTRY_POINT_USER = environment.apiUrl + "/client"
  private static readonly ENTRY_POINT_POST = environment.apiUrl + "/post";

  constructor(private _httpClient: HttpClient) { }

  registerVisitor(dto: OutputUser): Observable<InputUser> {
    return this._httpClient.post<InputUser>(Visitor_Service.ENTRY_POINT_USER+"/create", dto);
  }

  loginVisitor(data: UserCredentials): Observable<Object>{
    return this._httpClient.post(Visitor_Service.ENTRY_POINT_USER+"/fetchByLogin",data)
  }

  //Fetch de 4 last post for the page of presentation
  fetchLatestPosts(): Observable<PostInput[]> {
    return this._httpClient.get<PostInput[]>(Visitor_Service.ENTRY_POINT_POST+"/fetchLatestsPosts/4");
  }


}
