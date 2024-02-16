//dto for classes containing user meant to be fetched from the api

export interface InputUser {

  idClient: number;
  firstName: string;
  lastName: string;
  gender: string;
  mail: string;
  phoneNumber: string;
  town:string;
  roleClient: string;
  urlImage: string;

}

export interface OutputUser {

  firstName: string;
  lastName: string;
  gender: string;
  mail: string;
  hashedPassword: string;
  phoneNumber: string;
  town:string;
  roleClient: string;
  urlImage: string;

}

export interface UserCredentials{
  mail: string;
  hashedPassword: string;

}
