// USE ANGULAR MATERIAL AND BOOTSTRAP
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import{ FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { Visitor_loginComponent } from './visitor_hub/visitor_login/visitor_login.component';
import { Visitor_register } from './visitor_hub/visitor_register/visitor_register.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { Home_pageComponent } from './visitor_hub/home_page/home_page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JwtModule} from "@auth0/angular-jwt";
import { User_profileComponent } from './user_hub/user_profile/user_profile.component';
import { Disparition_feed_lost_animal_postComponent } from './post_hub/disparition_feed/disparition_feed_lost_animal_post.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import  {CookieService} from "ngx-cookie-service";
import { Visitor_hubComponent } from './visitor_hub/visitor_hub.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { User_profile_animal_list_displayComponent } from './user_hub/user_profile/user_profile_animal_display/user_profile_animal_list_display.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TokenInterceptorService} from "./interceptor/token-interceptor.service";
import {MatDividerModule} from "@angular/material/divider";
import {DatePipe} from "@angular/common";
import { DescriptionModalComponent } from './post_hub/disparition_feed/disparition_post_description_modal/description-modal/description-modal.component';
import { FoundFeedAnimalPostComponent } from './post_hub/found_feed/found-feed-animal-post/found-feed-animal-post.component';
import { Admin_hubComponent } from './admin_hub/admin_hub.component';
import { AdminPanelComponent } from './admin_hub/admin-panel/admin-panel.component';
import {AuthGuard} from "./guards/auth.guard";
import {AdminGuard} from "./guards/admin.guard";

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    Visitor_loginComponent,
    Visitor_register,
    Home_pageComponent,
    User_profileComponent,
    Disparition_feed_lost_animal_postComponent,
    Visitor_hubComponent,
    User_profile_animal_list_displayComponent,
    DescriptionModalComponent,
    FoundFeedAnimalPostComponent,
    Admin_hubComponent,
    AdminPanelComponent,
  ],
    imports: [
        MatNativeDateModule,
        MatRippleModule,
        MatDatepickerModule,
        MatButtonModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        RouterOutlet,
        AppRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        MatPaginatorModule,
        NgxPaginationModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost:7274"],
                disallowedRoutes: []
            }
        }),
        MatDialogModule,
        MatDividerModule,
    ],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}, DatePipe, AuthGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
