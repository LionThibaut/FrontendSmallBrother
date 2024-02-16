import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css']
})
export class DescriptionModalComponent
{
  description: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: { description: string })
  {
    this.description = data.description;
  }




}
