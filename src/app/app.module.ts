import { Filter } from './pipes/filter';
import { Users } from './services/usersService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationExtras } from '@angular/router';


// import {MatCardModule} from '@angular/material/card';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { MatFormFieldModule } from '@angular/material';
// import { MatInputModule } from '@angular/material';
// import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonComponent } from './common/common.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';


@NgModule({
  declarations: [
    Filter,
    AppComponent,
    HomepageComponent,
    CommonComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,routes,
    HttpClientModule,
    Ng2CarouselamosModule,
    FlexLayoutModule
    // MatCardModule,
    // MatAutocompleteModule,
    // MatFormFieldModule,MatInputModule,
    // MatSliderModule
  ],
  providers: [Users],
  bootstrap: [AppComponent]
})
export class AppModule { }
