import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Visitor_loginComponent} from "./visitor_hub/visitor_login/visitor_login.component";
import {Visitor_register} from "./visitor_hub/visitor_register/visitor_register.component";
import {Home_pageComponent} from "./visitor_hub/home_page/home_page.component";
import {User_profileComponent} from "./user_hub/user_profile/user_profile.component";
import {Disparition_feed_lost_animal_postComponent} from "./post_hub/disparition_feed/disparition_feed_lost_animal_post.component";
import {FoundFeedAnimalPostComponent} from "./post_hub/found_feed/found-feed-animal-post/found-feed-animal-post.component";
import {AdminPanelComponent} from "./admin_hub/admin-panel/admin-panel.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  { path: 'visitor_login', component: Visitor_loginComponent , title: "SmallBrother"},
  { path: 'register', component: Visitor_register, title: "SmallBrother"},
  { path: 'home_page', component: Home_pageComponent, title: "SmallBrother"},
  { path: 'user_profile', component: User_profileComponent, canActivate: [AuthGuard], title: "SmallBrother"},
  { path: 'animal', component: Disparition_feed_lost_animal_postComponent, canActivate: [AuthGuard], title: "SmallBrother"},
  { path: 'foundAnimals', component: FoundFeedAnimalPostComponent, canActivate: [AuthGuard], title: "SmallBrother"},
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard], title: "SmallBrother"},
  { path: '**', redirectTo: 'home_page', title: "SmallBrother"},
  { path: '',redirectTo: 'home_page', pathMatch:"full", title: "SmallBrother"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
