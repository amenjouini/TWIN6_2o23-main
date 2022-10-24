import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AdduserComponent,
    DashbordComponent,
    UpdateprofileComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
