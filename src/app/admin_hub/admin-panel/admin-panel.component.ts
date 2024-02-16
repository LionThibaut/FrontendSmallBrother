import { Component } from '@angular/core';
import {InputUser} from "../../dto/dto_User/dto_user";
import {AdminService} from "../admin.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  users: InputUser[] = [];
  alertDeleteUser: boolean = false;

  constructor(private _adminService: AdminService) {
  }

  private fetchAll() {
    this._adminService
      .fetchAllUsers()
      .subscribe(user => this.users = user);
  }

  ngOnInit(): void {
    this.fetchAll();
  }

  deleteUser(idClient: number) {
    if(confirm("Voulez-vous vraiment supprimer cette utilisateur")) {
      this._adminService.deleteUserById(idClient).subscribe(user => this.fetchAll())
      this.alertDeleteUser = true;
    }
  }

  closeAlert() {
    this.alertDeleteUser = false;
  }
}
