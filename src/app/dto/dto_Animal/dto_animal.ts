//Used in the modal ui from the user profile to add new animals to one's pfoile
export interface InputAnimal {

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

}

export interface OutputAnimal {

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
  idClient: number;

}
