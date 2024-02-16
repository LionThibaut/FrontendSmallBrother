import {Component, OnInit} from '@angular/core';
import {PostInput} from "../../../dto/dto_post/dto_post";
import {Post_service} from "../../post_service";
import {MatDialog} from "@angular/material/dialog";
import {
  DescriptionModalComponent
} from "../../disparition_feed/disparition_post_description_modal/description-modal/description-modal.component";
import {InputAnimal} from "../../../dto/dto_Animal/dto_animal";
import {User_Service} from "../../../user_hub/user_.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-found-feed-animal-post',
  templateUrl: './found-feed-animal-post.component.html',
  styleUrls: ['./found-feed-animal-post.component.css']
})
export class FoundFeedAnimalPostComponent implements OnInit{
  posts:PostInput[] = [];
  animals:  InputAnimal[] = [];
  p: number = 1;
  alertAddDisparition: boolean = false;

  ngOnInit(): void {
    this.fetchAll();
    this.fetchAllUsersSeenAnimals();
  }

  constructor(private _datePipa: DatePipe, private _cookieService: CookieService, private _postService: Post_service, public dialog: MatDialog, private _userService: User_Service, private _fb: FormBuilder){}

  private fetchAll() {
    this._postService
      .fetchAllPosts()
      .subscribe(post => this.posts = post);
  }

  private fetchAllUsersSeenAnimals()
  {
    this._userService.fetchAllSeenAnimalsByOwnerId().subscribe(animal => this.animals = animal);
  }

  form: FormGroup = this._fb.group({
    name: this._fb.control("", Validators.required),
    breed: this._fb.control("", Validators.required),
    tag: this._fb.control("", Validators.required),
    description: this._fb.control("", Validators.required),
    gender: this._fb.control("", Validators.required),
    type: this._fb.control("", Validators.required),
    urlImage: this._fb.control("", Validators.required),
    townDisparition: this._fb.control("", Validators.required),
  });
  hide = true;

  showDisparitionPostDescription(description: string) {
    let dialogue;
    dialogue = DescriptionModalComponent;
    this.dialog.open(dialogue,{data:{description: description}});
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  display = "none";
  alertSuppression: boolean = false;

  addAnimalToProfile() {
    this._userService.addAnimalToOwner({
      nameAnimal: this.form.value.name,
      breed: this.form.value.breed,
      tag: (this.form.value.tag==1)?true:false,
      birthdate: "2022-07-12",
      descriptionAnimal: this.form.value.description,
      height: "Inconnu",
      gender: this.form.value.gender,
      typeAnimal: this.form.value.type,
      statutAnimal: "R",
      urlImage: this.form.value.urlImage,
      idClient: Number(this._cookieService.get("CookieId"))
    }).subscribe(animal => {this.animals.push(animal) , this.createPostSeenAnimal(animal.idAnimal,animal.descriptionAnimal,animal.urlImage)});
    this.form.reset()
    this.alertAddDisparition = true;
  }


  createPostSeenAnimal(id: number, description: string, urlImage:string)
  {
    this._postService.createPost(id,description,urlImage).subscribe();
    this._postService.fetchAllPosts().subscribe(post =>this.fetchAll())
  }


  deleteSeenAnimal(idAnimal: number) {
    if(confirm("Voulez-vous vraiment supprimer ce post")) {
      this._userService.deleteAnimalById(idAnimal).subscribe(()=>{
        const index = this.animals.findIndex(animal => animal.idAnimal === idAnimal);
        this.animals.splice(index, 1);
        if (this.animals.length === 0) {
          this.fetchAllUsersSeenAnimals();
        }
        this._postService.fetchAllFoundPosts().subscribe(post =>this.fetchAll())
        this._postService.fetchAllPosts().subscribe(post =>this.fetchAll())
        this.alertSuppression = true;
      });
    }
  }

  closeAlert() {
    this.alertSuppression = false;
    this.alertAddDisparition = false;
  }

  states: string[] = [
    'Ciply',
    'Cuesmes',
    'Flénu',
    'Ghlin',
    'Harmignies',
    'Harveng',
    'Havré',
    'Hyon',
    'Jemappes',
    'Maisières',
    'Mesvin',
    'Mons-Centre',
    'Nimy',
    'Nouvelles',
    'Obourg',
    'Saint-Denis',
    'Saint-Symphorien',
    'Spienne',
    'Villers-Saint-Ghislain'
  ];
}
