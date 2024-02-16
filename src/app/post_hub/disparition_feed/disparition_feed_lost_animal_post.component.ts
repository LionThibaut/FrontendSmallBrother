import { Component } from '@angular/core';
import {PostInput, PostInputAnimal} from "../../dto/dto_post/dto_post";
import {Post_service} from "../post_service";
import {MatDialog} from "@angular/material/dialog";
import {
  DescriptionModalComponent
} from "./disparition_post_description_modal/description-modal/description-modal.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-disparition_feed',
  templateUrl: './disparition_feed_lost_animal_post.component.html',
  styleUrls: ['./disparition_feed_lost_animal_post.component.css']
})
export class Disparition_feed_lost_animal_postComponent {

  posts: PostInput[] = []
  constructor(private _datePipe: DatePipe, private _postService: Post_service, public dialog: MatDialog){}

  private fetchAll() {
    this._postService
      .fetchAllFoundPosts()
      .subscribe(post => this.posts = post);
  }

  ngOnInit(): void {
    this.fetchAll();
  }

  showDisparitionPostDescription(description: string) {
    let dialogue;
    dialogue = DescriptionModalComponent;
    this.dialog.open(dialogue,{data:{description: description}});
  }
}
