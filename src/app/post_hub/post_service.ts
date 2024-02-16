import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInput} from "../dto/dto_post/dto_post";

@Injectable({
  providedIn: 'root'
})
export class Post_service {

  private static readonly ENTRY_POINT = environment.apiUrl + "/post";

  constructor(private _httpClient: HttpClient) { }

  fetchAllPosts(): Observable<PostInput[]> {
    return this._httpClient.get<PostInput[]>(Post_service.ENTRY_POINT+"/fetchAllFound");
  }

  fetchAllFoundPosts(): Observable<PostInput[]> {
    return this._httpClient.get<PostInput[]>(Post_service.ENTRY_POINT+"/fetchAllNotFound");
  }

  createPost(id: number,description: string, urlImage: string){
    return  this._httpClient.post(Post_service.ENTRY_POINT+"/create",{datePost: "Inconnu", nbAlert: 0,townDisparition: "Inconnu", descriptionPost: description,urlImage: urlImage,idAnimal: id});
  }
}

