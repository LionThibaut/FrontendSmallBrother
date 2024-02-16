import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InputUser} from "../dto/dto_User/dto_user";

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private static readonly ENTRY_POINT = environment.apiUrl + "/client";

  constructor(private _httpClient: HttpClient) { }

  fetchAllUsers(): Observable<InputUser[]> {
    return this._httpClient.get<InputUser[]>(AdminService.ENTRY_POINT + "/fetchAll");
  }

  deleteUserById(id: number){
    return this._httpClient.delete(`${AdminService.ENTRY_POINT}/delete/${id}`);
  }

}
