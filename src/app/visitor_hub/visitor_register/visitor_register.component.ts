import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OutputUser} from "../../dto/dto_User/dto_user";
import {Visitor_Service} from "../visitor_.service";
import {InputUser} from "../../dto/dto_User/dto_user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './visitor_register.component.html',
  styleUrls: ['./visitor_register.component.css'],
})

export class Visitor_register implements OnInit{

  @Output()
  clientCreated: EventEmitter<OutputUser> = new EventEmitter<OutputUser>();

  @Input()
  users: InputUser[] = [];
  form: FormGroup = this._fb.group({
    firstName: this._fb.control("",Validators.required),
    lastName: this._fb.control("",Validators.required),
    gender: this._fb.control("",Validators.required),
    hashedPassword: this._fb.control("",Validators.required),
    mail:["",[Validators.required,Validators.email]],
    //Regex for a belgium phone number
    phoneNumber:['', [ Validators.required,
      Validators.pattern("^(((\\+|00)32[ ]?(?:\\(0\\)[ ]?)?)|0){1}(4(60|[789]\\d)\\/?(\\s?\\d{2}\\.?){2}(\\s?\\d{2})|(\\d\\/?\\s?\\d{3}|\\d{2}\\/?\\s?\\d{2})(\\.?\\s?\\d{2}){2})$"),
      Validators.minLength(10), Validators.maxLength(12)]],
    town: this._fb.control("",Validators.required),

  });
  hide=true;
  constructor(private _fb: FormBuilder, private _visitorService: Visitor_Service, private _router: Router) {}
  credentials:any;
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
  invalidLogin: boolean = false;

   ngOnInit(): void {
   }

   emitRegisterForm() {
     this.credentials = {
      'mail': this.form.value.mail,
      'hashedPassword': this.form.value.hashedPassword,
    }

    this._visitorService.registerVisitor({
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      gender: (this.form.value.gender == 1) ? "M" : "F",
      mail: this.form.value.mail,
      hashedPassword: this.form.value.hashedPassword,
      phoneNumber: this.form.value.phoneNumber,
      town: this.form.value.town,
      // "U" is the default rank for User
      roleClient: "U",
      //Default Image for user
      urlImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    }).subscribe(user => {
        this.users.push(user);
        this._router.navigate(['/visitor_login'])
      });
     this.form.reset();
  }



}
