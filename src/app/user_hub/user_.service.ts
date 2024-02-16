import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InputPostDisparition, PostInputUser} from "../dto/dto_post/dto_post";
import {InputAnimal, OutputAnimal} from "../dto/dto_Animal/dto_animal";

@Injectable({
  providedIn: 'root'
})

//Service for connected user

export class User_Service {

  private static readonly ENTRY_POINT_CLIENT = environment.apiUrl + "/client";
  private static readonly ENTRY_POINT_ANIMAL = environment.apiUrl + "/animal"

  constructor(private _httpClient: HttpClient) { }

  fetchClientById(): Observable<PostInputUser> {
    return this._httpClient.get<PostInputUser>(User_Service.ENTRY_POINT_CLIENT+"/fetchById");
  }

  addAnimalToOwner(inputedAnimalData: OutputAnimal): Observable<InputAnimal> {
    return this._httpClient.post<InputAnimal>(User_Service.ENTRY_POINT_ANIMAL+"/create", inputedAnimalData);
  }

  fetchAllAnimalsByOwnerId(): Observable<InputAnimal[]> {
    return this._httpClient.get<InputAnimal[]>(User_Service.ENTRY_POINT_ANIMAL+"/fetchByIdClient");
  }

  fetchAllSeenAnimalsByOwnerId(): Observable<InputAnimal[]> {
    return this._httpClient.get<InputAnimal[]>(User_Service.ENTRY_POINT_ANIMAL+"/fetchByIdClientFound");
  }

  updateAnimalStateToLost(data: InputPostDisparition)
  {
    return this._httpClient.patch(User_Service.ENTRY_POINT_ANIMAL+"/changeStatutLost", data);
  }

  updateAnimalStateToDefault(id: number)
  {
    return this._httpClient.patch(`${User_Service.ENTRY_POINT_ANIMAL+"/changeStatutDefault"}/${id}`,id);
  }

  deleteAnimalById(id: number)
  {
    return this._httpClient.delete(`${User_Service.ENTRY_POINT_ANIMAL+"/delete"}/${id}`);
  }

  //Use for supress cookie in the back
  disconnect(){
    this._httpClient.post(User_Service.ENTRY_POINT_CLIENT+"/disconnect",{}).subscribe(data=>console.log(data));
  }

}
