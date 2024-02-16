import {ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {User_Service} from "../../user_.service";
import {ActivatedRoute} from "@angular/router";
import {InputAnimal, OutputAnimal} from "../../../dto/dto_Animal/dto_animal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {InputPostDisparition} from "../../../dto/dto_post/dto_post";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-user_profile_animal_display',
  templateUrl: './user_profile_animal_list_display.component.html',
  styleUrls: ['./user_profile_animal_list_display.component.css']
})
export class User_profile_animal_list_displayComponent implements OnInit{

  //Paginator (angular Material)
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  @Input()
  animals: InputAnimal[] = [];
  @Output()
  clientCreated: EventEmitter<OutputAnimal> = new EventEmitter<OutputAnimal>();
  p: number = 1;
  idAnimalContext: number = 0;
  display = "none";
  display2 = "none";
  alertAddAnimal:boolean = false;
  alertSuppression:boolean = false;

  constructor(private _cookieService: CookieService, private _fb: FormBuilder, public _datePipe: DatePipe, public _userService: User_Service, public dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef, private _route: ActivatedRoute) {
  }

  openModal() {
    this.display = "block";
  }
  openModal2(id: number) {
    this.idAnimalContext = id;
    this.display2 = "block";
  }

  onCloseHandled() {
    this.display = "none";
    this.display2 = "none"
  }

  ngOnInit(): void {
    //routing
    this._route.paramMap.subscribe(args =>{
        this.fetchMyAnimals();
    });
  }

  private fetchMyAnimals() {
    this._userService
      .fetchAllAnimalsByOwnerId()
      .subscribe(animals => this.animals = animals);
  }

  /*Set a animal to its default state (at home)*/
  declareAtHome(idAnimal: number)
  {
    this._userService.updateAnimalStateToDefault(idAnimal).subscribe(data => this.fetchMyAnimals());
  }

  tailles: string[] = [
    "10-30",
    "30-50",
    "50-80",
    "80-100",
    "100-150"
  ];

  form: FormGroup = this._fb.group({
    name: this._fb.control("", Validators.required),
    breed: this._fb.control("", Validators.required),
    tag: this._fb.control("", Validators.required),
    description: this._fb.control("", Validators.required),
    height: this._fb.control("", Validators.required),
    gender: this._fb.control("", Validators.required),
    type: this._fb.control("", Validators.required),
    birth: this._fb.control("", Validators.required),
    urlImage: this._fb.control("", Validators.required),
  });
  hide = true;

  addAnimalToProfile() {
    console.log("Année ==> ",this.convertDateFromat(this.form.value.birth));
    this._userService.addAnimalToOwner({
      nameAnimal: this.form.value.name,
      breed: this.form.value.breed,
      tag: (this.form.value.tag==1)?true:false,
      birthdate: this.convertDateFromat(this.form.value.birth),
      descriptionAnimal: this.form.value.description,
      height: this.form.value.height,
      gender: this.form.value.gender,
      typeAnimal: this.form.value.type,
      statutAnimal: "N",
      urlImage: this.form.value.urlImage,
      idClient: Number(this._cookieService.get("CookieId"))
    }).subscribe(animal => {this.animals.push(animal)});
    this.form.reset()
    this.alertAddAnimal = true;
  }

  //Année - mois - jour ==> en db
  //mois - jour - année ==> en front
  convertDateFromat(date: Date): string
  {
    let date2 = this._datePipe.transform(date,"YYYY-dd-MM");
    // @ts-ignore
    return date2.toString();
  }

  @Input()
  data: InputPostDisparition;
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

  formDisparu: FormGroup = this._fb.group({
    townDisparition: this._fb.control("", Validators.required),
    descriptionPost: this._fb.control("", Validators.required),
  });

  confirmAnimalDisparition() {
    this.data = {id: this.idAnimalContext, townDisparition: this.formDisparu.value.townDisparition, descriptionPost:this.formDisparu.value.descriptionPost}
    this._userService.updateAnimalStateToLost(this.data).subscribe(data => this.fetchMyAnimals());
    this.formDisparu.reset()
    this.alertAddAnimal = true;
  }

  deleteAnimal(id: number)
  {
    if(confirm("Voulez-vous vraiment supprimer cette animal")) {
      this._userService.deleteAnimalById(id).subscribe(() => {
        const index = this.animals.findIndex(animal => animal.idAnimal === id);
        this.animals.splice(index, 1);
        if (this.animals.length === 0) {
          this.fetchMyAnimals();
        }
      });
      this.alertSuppression = true;
    }
  }

  closeAlert() {
    this.alertSuppression = false;
    this.alertAddAnimal = false;
  }
}
