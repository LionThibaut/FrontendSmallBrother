//
export interface PostInput {

  idPost: number;
  datePost: string;
  nbAlert: number;
  townDisparition: string;
  descriptionPost: string;
  animalPost: PostInputAnimal;

}
export interface PostInputAnimal {

  idAnimal: number;
  nameAnimal: string;
  breed: string;
  tag: boolean;
  birthdate: string;
  descriptionAnimal: string;
  height: string;
  gender: string;
  typeAnimal: string;
  statutAnimal: string;
  urlImage: string;
  clientAnimalPost: PostInputUser;

}
export interface PostInputUser {

  idClient: number,
  firstName: string,
  lastName: string,
  gender: string,
  mail: string,
  phoneNumber: string,
  town: string,
  roleClient: string,
  urlImage: string


}

export interface InputPostDisparition {

  id: number,
  townDisparition: string,
  descriptionPost: string,

}
