import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CommonComponent } from './common/common.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';







export const router:Routes=[
    {path:'',redirectTo:"SCM",pathMatch:"full"},
    {path:'SCM',component:CommonComponent,
    children : [
        {path:'',redirectTo:"home",pathMatch:"full"},
        {path:"home",component:HomepageComponent}
    ]

    },
    {path:'login',component:LoginComponent},
    {path:'Dashboard',component:DashboardComponent,
    children : [
        {path:'',redirectTo:'users',pathMatch:"full"},
        {path:'users',component:UsersComponent},
        {path:'products',component:ProductsComponent},
        {path:'edituser',component:EdituserComponent},
        {path:'Adduser',component:AdduserComponent}
    ]


    }

    
]

export const routes = RouterModule.forRoot(router);